import {expect, test} from '@jest/globals';
import sum from '../src/ulils/sum';

test('sum', () => {
  expect(sum(3, 5)).toBe(8);
});
