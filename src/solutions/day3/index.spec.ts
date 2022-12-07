import { day3puzzle1, day3puzzle2 } from "./index";

describe('Day 3', () => {
  test('Puzzle 1', async () => {
    const result = await day3puzzle1();
    const answer = 8233
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day3puzzle2();
    const answer = 2821
    expect(result).toBe(answer);
  });
});