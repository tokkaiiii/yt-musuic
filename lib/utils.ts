import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))
// await sleep(1000) 1초 대기

export const getRandomInt = (min: number, max: number) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomArrayElement<T>(array: T[]): T {
  return array[getRandomInt(0, array.length - 1)];
}

export function chunkArray<T>(array: T[], size: number): T[][] {
  return array.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / size);
    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }
    acc[chunkIndex].push(item);
    return acc;
  }, [] as T[][]);
}

export function generateRandomHexColor() {
  return '#' + Math.floor(Math.random()*0xFFFFFF << 0).toString(16).padStart(6, '0');
}