/**
 * hxToRgb
 * Converts hex to rgb color codes
 * Assumes first character is NaN
 * @param {string} hex
 * @param {number} opacity from 0 to 1
 * @returns {string} rgba
*/

export default function hexToRgb(hex, a) {
	var chex = hex.slice(1);
	var bigint = parseInt(chex, 16);
	var r = (bigint >> 16) & 255;
	var g = (bigint >> 8) & 255;
	var b = bigint & 255;
	var color = [r, g, b, a].join();
	var rgba = "rgba(" + color + ")";
	return rgba;
}
