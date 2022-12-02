import { day1puzzle1, day1puzzle2 } from "./index";

describe('Day 1', () => {
  test('Puzzle 1', async () => {
    const result = await day1puzzle1();
    const answer = 68467
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day1puzzle2();
    const answer = 203420
    expect(result).toBe(answer);
  });
});