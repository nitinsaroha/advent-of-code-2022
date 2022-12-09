import { day6puzzle1, day6puzzle2 } from "./index";

describe('Day 6', () => {
  test('Puzzle 1', async () => {
    const result = await day6puzzle1();
    const answer = 1238
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day6puzzle2();
    const answer = 3037
    expect(result).toBe(answer);
  });
});