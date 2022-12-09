import { day5puzzle1, day5puzzle2 } from "./index";

describe('Day 3', () => {
  test('Puzzle 1', async () => {
    const result = await day5puzzle1();
    const answer = 'TLFGBZHCN'
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day5puzzle2();
    const answer = 'QRQFHFWCL'
    expect(result).toBe(answer);
  });
});