import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** @function cn */
/**
 * Returns merged classnames
 * @param {ClassValue[]} inputs
 * @returns {string}ّ
 */

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
