import { expect, it } from 'vitest';
import { splitEvenly } from '../../src/money.js';

it('gives the remainder to the first shares', () => {
  expect(splitEvenly(1000, 3)).toEqual([334, 333, 333]);
});

it('never loses a cent', () => {
  for (const [total, parts] of [[1, 2], [99, 4], [12345, 7], [7, 7], [0, 3]]) {
    const shares = splitEvenly(total, parts);
    expect(shares).toHaveLength(parts);
    expect(shares.reduce((a, b) => a + b, 0)).toBe(total);
    expect(Math.max(...shares) - Math.min(...shares)).toBeLessThanOrEqual(1);
  }
});

it('rejects an invalid number of parts', () => {
  expect(() => splitEvenly(100, 0)).toThrow(RangeError);
});
