import { join } from "path";
import { readFileByLine } from "../../utils";

function rangeFromPairs(start: number, end: number) {
  return Array.from({ length: end - start + 1 }, (_, idx) => start + idx);
}

export async function day4puzzle1(filename = "day4-input.txt") {
  const rl = readFileByLine(join(__dirname, filename));

  let totalPairs = 0;
  for await (const line of rl) {
    // empty line means new Elf
    if (line === "") {
      continue;
    }

    // line: 2-4,6-8 --> [[2,4], [6,8]]
    const pairs = line
      .split(",")
      .map((range) => range.split("-").map((numStr) => parseInt(numStr)));

    // [[2, 4], [6,8]] --> [[2,3,4], [6,7,8]]
    const rangeArr: number[][] = pairs.map((range) => {
      // We can guarantee there will be two numbers here
      return rangeFromPairs(range[0], range[1]);
    });

    // first:[2,3,4], second: [6,7,8]
    const [first, second] = rangeArr;

    // Check if first contains "all" elements of second and vice verse
    if (
      first.every((v) => second.includes(v)) ||
      second.every((v) => first.includes(v))
    ) {
      totalPairs += 1;
    }
  }

  return totalPairs;
}

export async function day4puzzle2(filename = "day4-input.txt") {
  const rl = readFileByLine(join(__dirname, filename));

  let totalPairs = 0;
  for await (const line of rl) {
    // empty line means new Elf
    if (line === "") {
      continue;
    }

    // line: 2-4,6-8 --> [[2,4], [6,8]]
    const pairs = line
      .split(",")
      .map((range) => range.split("-").map((numStr) => parseInt(numStr)));

    // [[2, 4], [6,8]] --> [[2,3,4], [6,7,8]]
    const rangeArr: number[][] = pairs.map((range) => {
      // We can guarantee there will be two numbers here
      return rangeFromPairs(range[0], range[1]);
    });

    // first:[2,3,4], second: [6,7,8]
    const [first, second] = rangeArr;

    // Check if first contains "some" elements of second and vice verse
    if (
      first.some((v) => second.includes(v)) ||
      second.some((v) => first.includes(v))
    ) {
      totalPairs += 1;
    }
  }

  return totalPairs;
}
