export function sumClamp(numbers: number[], clamp: number): number {
  let result: number = 0;

  let sum: number = numbers.reduce((prev: number, curr: number) => {
    return prev + curr;
  }, 0);

  result = sum + clamp;
  return result;
}
