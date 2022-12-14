import { day1puzzle1, day1puzzle2 } from "./solutions/day1";
import { day2puzzle1, day2puzzle2 } from "./solutions/day2";
import { day3puzzle1, day3puzzle2 } from "./solutions/day3";
import { day4puzzle1, day4puzzle2 } from "./solutions/day4";
import { day5puzzle1, day5puzzle2 } from "./solutions/day5";
import { day6puzzle1, day6puzzle2 } from "./solutions/day6";

// Results won't be in order due to promises
// Day 1
day1puzzle1().then((result) => console.log(`Day 1 Puzzle 1: ${result}`));
day1puzzle2().then((result) => console.log(`Day 1 Puzzle 2: ${result}`));

// Day 2
day2puzzle1().then((result) => console.log(`Day 2 Puzzle 1: ${result}`));
day2puzzle2().then((result) => console.log(`Day 2 Puzzle 2: ${result}`));

// Day 3
day3puzzle1().then((result) => console.log(`Day 3 Puzzle 1: ${result}`));
day3puzzle2().then((result) => console.log(`Day 3 Puzzle 2: ${result}`));

// Day 4
day4puzzle1().then((result) => console.log(`Day 4 Puzzle 1: ${result}`));
day4puzzle2().then((result) => console.log(`Day 4 Puzzle 2: ${result}`));

// Day 5
day5puzzle1().then((result) => console.log(`Day 5 Puzzle 1: ${result}`));
day5puzzle2().then((result) => console.log(`Day 5 Puzzle 2: ${result}`));

// Day 6
day6puzzle1().then((result) => console.log(`Day 6 Puzzle 1: ${result}`));
day6puzzle2().then((result) => console.log(`Day 6 Puzzle 2: ${result}`));