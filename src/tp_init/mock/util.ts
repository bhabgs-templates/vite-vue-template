/* eslint-disable @typescript-eslint/no-explicit-any */
import { type } from 'os';

// 计算
const compunted: (a: number, b: number, c: number) => string = (
  min,
  max,
  precision,
) => {
  const num = parseInt(`${Math.random() * (max - min + 1)}${min}`, 10);
  return num.toFixed(precision);
};

// 计算百分数
const computedPercentage: (a: number, b: number, c: number) => string = (
  min,
  max,
  precision,
) => {
  let num = Math.random() * max;
  if (num < min) {
    num = 1 - num;
  }
  return num.toFixed(precision);
};

// 随机真伪
const computedTrue = () => {
  return !(Math.random() > 0.5);
};

export { compunted, computedTrue, computedPercentage };
