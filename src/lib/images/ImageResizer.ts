/*

Copyright (c) 2012 Ross Turner and contributors (https://github.com/zsinj)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

Based on code from these repositories:

- https://github.com/rossturner/HTML5-ImageUploader
- https://github.com/ericnograles/browser-image-resizer

Converted to TypeScript, added some error handling, use blobs instead of data URLs.

*/

import ExifReader from "exifreader";

export type Configuration = {
  quality: number;
  maxWidth: number;
  maxHeight: number;
  outputWidth?: number;
  maxSize?: number;
  scaleRatio?: number;
  autoRotate: boolean;
  debug: boolean;
  mimeType: string;
};

const DEFAULT_CONFIG: Configuration = {
  quality: 0.5,
  maxWidth: 800,
  maxHeight: 600,
  autoRotate: true,
  debug: false,
  mimeType: "image/jpeg",
};

export function readAndCompressImage(
  file: File,
  userConfig: Configuration
): Promise<Blob> {
  return new Promise((resolve) => {
    const img = document.createElement("img");
    const config = Object.assign({}, DEFAULT_CONFIG, userConfig);

    img.src = URL.createObjectURL(file);
    img.onload = function () {
      if (config.autoRotate) {
        if (config.debug)
          console.log("browser-image-resizer: detecting image orientation...");
        const fileReader = new FileReader();
        fileReader.onload = () => {
          let orientation: ExifReader.NumberTag | undefined;
          try {
            const buffer = fileReader.result;
            if (!(buffer instanceof ArrayBuffer)) {
              throw new Error(
                "Buffer was not defined as Buffer object after reading."
              );
            }
            const Result = ExifReader.load(buffer);
            orientation = Result.Orientation;
          } catch (err) {
            console.log("Could not determine image orientation:", err);
            throw new Error("Could not determine image orientation.");
          }
          if (config.debug) {
            console.log(
              "browser-image-resizer: image orientation from EXIF tag = " +
                orientation
            );
          }
          resolve(scaleImage(img, config, orientation?.value));
          URL.revokeObjectURL(img.src);
        };
        fileReader.readAsArrayBuffer(file);
      } else {
        if (config.debug)
          console.log(
            "browser-image-resizer: ignoring EXIF orientation tag because autoRotate is false..."
          );
        resolve(scaleImage(img, config));
        URL.revokeObjectURL(img.src);
      }
    };
  });
}

async function scaleImage(
  img: HTMLImageElement,
  config: Configuration,
  orientation = 1
): Promise<Blob> {
  let canvas = document.createElement("canvas");
  canvas.width = img.width;
  canvas.height = img.height;

  // EXIF
  exifApplied(canvas, orientation, img);

  const maxWidth = findMaxWidth(config, canvas);

  while (canvas.width >= 2 * maxWidth) {
    canvas = getHalfScaleCanvas(canvas);
  }

  if (canvas.width > maxWidth) {
    canvas = scaleCanvasWithAlgorithm(canvas, maxWidth);
  }

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (result) => {
        if (result == null) {
          reject();
        } else {
          resolve(result);
        }
      },
      config.mimeType,
      config.quality
    );
  });
}

function findMaxWidth(config: Configuration, canvas: HTMLCanvasElement) {
  //Let's find the max available width for scaled image
  let ratio = canvas.width / canvas.height;
  let mWidth = Math.min(
    canvas.width,
    config.maxWidth,
    ratio * config.maxHeight
  );
  if (
    config.maxSize !== undefined &&
    config.maxSize > 0 &&
    config.maxSize < (canvas.width * canvas.height) / 1000
  )
    mWidth = Math.min(
      mWidth,
      Math.floor((config.maxSize * 1000) / canvas.height)
    );
  if (!!config.scaleRatio)
    mWidth = Math.min(mWidth, Math.floor(config.scaleRatio * canvas.width));

  if (config.debug) {
    console.log(
      "browser-image-resizer: original image size = " +
        canvas.width +
        " px (width) X " +
        canvas.height +
        " px (height)"
    );
    console.log(
      "browser-image-resizer: scaled image size = " +
        mWidth +
        " px (width) X " +
        Math.floor(mWidth / ratio) +
        " px (height)"
    );
  }
  if (mWidth <= 0) {
    throw new Error("Image size is too small.");
  }

  return mWidth;
}

function exifApplied(
  canvas: HTMLCanvasElement,
  orientation: number,
  img: HTMLImageElement
) {
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    return;
  }

  ctx.save();
  let width = canvas.width;
  let styleWidth = canvas.style.width;
  let height = canvas.height;
  let styleHeight = canvas.style.height;
  if (orientation > 4) {
    canvas.width = height;
    canvas.style.width = styleHeight;
    canvas.height = width;
    canvas.style.height = styleWidth;
  }
  switch (orientation) {
    case 2:
      ctx.translate(width, 0);
      ctx.scale(-1, 1);
      break;
    case 3:
      ctx.translate(width, height);
      ctx.rotate(Math.PI);
      break;
    case 4:
      ctx.translate(0, height);
      ctx.scale(1, -1);
      break;
    case 5:
      ctx.rotate(0.5 * Math.PI);
      ctx.scale(1, -1);
      break;
    case 6:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(0, -height);
      break;
    case 7:
      ctx.rotate(0.5 * Math.PI);
      ctx.translate(width, -height);
      ctx.scale(-1, 1);
      break;
    case 8:
      ctx.rotate(-0.5 * Math.PI);
      ctx.translate(-width, 0);
      break;
  }
  ctx.drawImage(img, 0, 0);
  ctx.restore();
}

function scaleCanvasWithAlgorithm(
  canvas: HTMLCanvasElement,
  outputWidth: number
) {
  const scaledCanvas = document.createElement("canvas");
  const scale = outputWidth / canvas.width;

  scaledCanvas.width = canvas.width * scale;
  scaledCanvas.height = canvas.height * scale;

  const srcImgData = canvas
    .getContext("2d")
    ?.getImageData(0, 0, canvas.width, canvas.height);
  if (!srcImgData) {
    throw new Error(
      "Could not reduce image size (Could not get original image data)."
    );
  }

  const destImgData = scaledCanvas
    .getContext("2d")
    ?.createImageData(scaledCanvas.width, scaledCanvas.height);
  if (!destImgData) {
    throw new Error(
      "Could not reduce image size (Could not get resized image data)."
    );
  }

  applyBilinearInterpolation(srcImgData, destImgData, scale);

  scaledCanvas.getContext("2d")?.putImageData(destImgData, 0, 0);

  return scaledCanvas;
}

function getHalfScaleCanvas(canvas: HTMLCanvasElement) {
  let halfCanvas = document.createElement("canvas");
  halfCanvas.width = canvas.width / 2;
  halfCanvas.height = canvas.height / 2;

  const ctx = halfCanvas.getContext("2d");
  if (!ctx) {
    throw new Error("Could not reduce image size (<canvas> error).");
  }
  ctx.drawImage(canvas, 0, 0, halfCanvas.width, halfCanvas.height);

  return halfCanvas;
}

function applyBilinearInterpolation(
  srcCanvasData: ImageData,
  destCanvasData: ImageData,
  scale: number
) {
  function inner(
    f00: number,
    f10: number,
    f01: number,
    f11: number,
    x: number,
    y: number
  ) {
    let un_x = 1.0 - x;
    let un_y = 1.0 - y;
    return f00 * un_x * un_y + f10 * x * un_y + f01 * un_x * y + f11 * x * y;
  }
  let i, j;
  let iyv, iy0, iy1, ixv, ix0, ix1;
  let idxD, idxS00, idxS10, idxS01, idxS11;
  let dx, dy;
  let r, g, b, a;
  for (i = 0; i < destCanvasData.height; ++i) {
    iyv = i / scale;
    iy0 = Math.floor(iyv);
    // Math.ceil can go over bounds
    iy1 =
      Math.ceil(iyv) > srcCanvasData.height - 1
        ? srcCanvasData.height - 1
        : Math.ceil(iyv);
    for (j = 0; j < destCanvasData.width; ++j) {
      ixv = j / scale;
      ix0 = Math.floor(ixv);
      // Math.ceil can go over bounds
      ix1 =
        Math.ceil(ixv) > srcCanvasData.width - 1
          ? srcCanvasData.width - 1
          : Math.ceil(ixv);
      idxD = (j + destCanvasData.width * i) * 4;
      // matrix to vector indices
      idxS00 = (ix0 + srcCanvasData.width * iy0) * 4;
      idxS10 = (ix1 + srcCanvasData.width * iy0) * 4;
      idxS01 = (ix0 + srcCanvasData.width * iy1) * 4;
      idxS11 = (ix1 + srcCanvasData.width * iy1) * 4;
      // overall coordinates to unit square
      dx = ixv - ix0;
      dy = iyv - iy0;
      // I let the r, g, b, a on purpose for debugging
      r = inner(
        srcCanvasData.data[idxS00],
        srcCanvasData.data[idxS10],
        srcCanvasData.data[idxS01],
        srcCanvasData.data[idxS11],
        dx,
        dy
      );
      destCanvasData.data[idxD] = r;

      g = inner(
        srcCanvasData.data[idxS00 + 1],
        srcCanvasData.data[idxS10 + 1],
        srcCanvasData.data[idxS01 + 1],
        srcCanvasData.data[idxS11 + 1],
        dx,
        dy
      );
      destCanvasData.data[idxD + 1] = g;

      b = inner(
        srcCanvasData.data[idxS00 + 2],
        srcCanvasData.data[idxS10 + 2],
        srcCanvasData.data[idxS01 + 2],
        srcCanvasData.data[idxS11 + 2],
        dx,
        dy
      );
      destCanvasData.data[idxD + 2] = b;

      a = inner(
        srcCanvasData.data[idxS00 + 3],
        srcCanvasData.data[idxS10 + 3],
        srcCanvasData.data[idxS01 + 3],
        srcCanvasData.data[idxS11 + 3],
        dx,
        dy
      );
      destCanvasData.data[idxD + 3] = a;
    }
  }
}
