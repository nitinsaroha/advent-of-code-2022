import { day4puzzle1, day4puzzle2 } from "./index";

describe('Day 3', () => {
  test('Puzzle 1', async () => {
    const result = await day4puzzle1();
    const answer = 471
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day4puzzle2();
    const answer = 1
    expect(result).toBe(answer);
  });
});