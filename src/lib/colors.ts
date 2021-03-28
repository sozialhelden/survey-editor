import { hsl, rgb } from "d3-color";
import { interpolateHsl, interpolateLab } from "d3-interpolate";

/**
 * @returns a brighter version of the given color. Nicer looking than using HSL + changing the
 * luminance: The LAB color space is modeled similarly to how the human eye senses light, resulting
 * in more ‘natural’ color tones.
 */
export function coloredWhite(color: string, value: number = 0.5) {
  const labColor = hsl(color);
  return interpolateHsl(labColor, "white")(value).toString();
}

/** @returns a brighter version of the given color. */
export function brighter(color: string, value: number = 0.3) {
  return hsl(color).brighter(value).toString();
}

/** @returns a darker version of the given color. */
export function darker(color: string, value: number = 0.3) {
  return hsl(color).darker(value).toString();
}

/** @returns the same color, but with a different alpha (opacity) value. */
export function alpha(color: string, value: number = 0.4) {
  const alphaColor = rgb(color);
  alphaColor.opacity *= value;
  return alphaColor.toString();
}

/**
 * @returns a color between the given two colors, mixed using the LAB color space. This color space
 * is modeled similarly to how the human eye senses light, resulting in more ‘natural’ color tones.
 */
export function mixLab(color1: string, color2: string, ratio: number = 0.5) {
  return interpolateLab(color1, color2)(ratio).toString();
}
