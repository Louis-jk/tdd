export function sumClamp(numbers: number[], clamp: number): number {
  let sum: number = 0;
  if (numbers && numbers.length > 0) {
    sum = numbers.reduce((prev: number, curr: number) => {
      return prev + curr;
    }, 0);
  }

  let result = sum + clamp;
  return result;
}
