import { sumClamp } from './sumClamp';

describe('sumClamp', () => {
  it('should sum up to zero', () => {
    expect(sumClamp([], 10)).toBe(10);
  });

  it('should sum up to zero from some numbers', () => {
    expect(sumClamp([-2, 1], 10)).toBe(9);
  });

  it('should some some numbers', () => {
    expect(sumClamp([1, 2, 3, 4], 20)).toBe(30);
  });
});
