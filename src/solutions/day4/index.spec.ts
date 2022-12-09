import { day4puzzle1, day4puzzle2 } from "./index";

describe('Day 4', () => {
  test('Puzzle 1', async () => {
    const result = await day4puzzle1();
    const answer = 471
    expect(result).toBe(answer);
  });

  test('Puzzle 2', async () => {
    const result = await day4puzzle2();
    const answer = 888
    expect(result).toBe(answer);
  });
});