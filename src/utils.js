const score = [25, 18, 15, 12, 10, 8, 6, 4, 2, 1];
export const numOr0 = (n) => (isNaN(n) ? 0 : n);
export const sumOfArray = (arr) => arr.reduce((a, b) => numOr0(a) + b, 0);
export const getScore = (arr) =>
  sumOfArray(arr.map((value, index) => (value <= 10 ? score[value - 1] : 0)));
