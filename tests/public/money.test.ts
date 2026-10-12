import { expect, it } from 'vitest';
import { splitEvenly } from '../../src/money.js';

it('splits an amount that divides evenly', () => {
  expect(splitEvenly(900, 3)).toEqual([300, 300, 300]);
});
