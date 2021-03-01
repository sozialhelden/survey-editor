import { hsl, rgb } from "d3-color";
import { interpolateHsl, interpolateLab } from "d3-interpolate";

export function coloredWhite(color: string, value: number = 0.5) {
  const labColor = hsl(color);
  return interpolateHsl(labColor, "white")(value).toString();
}

export function brighter(color: string, value: number = 0.3) {
  return hsl(color).brighter(value).toString();
}

export function darker(color: string, value: number = 0.3) {
  return hsl(color).darker(value).toString();
}

export function alpha(color: string, value: number = 0.4) {
  const alphaColor = rgb(color);
  alphaColor.opacity *= value;
  return alphaColor.toString();
}

export function mixLab(color1: string, color2: string, ratio: number = 0.5) {
  return interpolateLab(color1, color2)(ratio).toString();
}
