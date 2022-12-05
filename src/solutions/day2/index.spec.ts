import { day2puzzle1, day2puzzle2 } from "./index";

describe('Day 2', () => {
  test('Puzzle 1', async () => {
    const result = await day2puzzle1();
    const answer = 13682
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day2puzzle2();
    const answer = 12
    expect(result).toBe(answer);
  });
});