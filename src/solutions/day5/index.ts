import { join } from "path";
import { readFileByLine } from "../../utils";

interface Mapping {
  [key: number]: number;
}

const generateInputCharMapping = (numStacks: number) => {
  const mapping: Mapping = {}
  for (let i = 0, j = 1; i < numStacks; i++, j += 4){
    mapping[j] = i
  }
  return mapping
}

export async function day5puzzle1(filename = "day5-input.txt") {
  // Read once to create our stacks
  const rl1 = readFileByLine(join(__dirname, filename));

  let numStacks = 0;
  for await (const line of rl1) {
    // Regex for checking if line only has numbers and spaces
    if (/^[\d ]*$/.test(line)) {
      const numStacksArr = line
        .split(" ")
        .filter((char) => char != "")
      numStacks = parseInt(numStacksArr[numStacksArr.length - 1])
      break;
    }
  }

  const cratesMapping = generateInputCharMapping(numStacks);
  const stacks = Array(numStacks)
    .fill(0)
    .map((_) => Array(0).fill(0));

  const rl2 = readFileByLine(join(__dirname, filename));
  for await (const line of rl2) {
    // empty line means new Elf, Regex is for lines with numbers
    if (line === "" || /\d/.test(line)) {
      continue;
    }

    const lineArr = line.split("");
    for (const [index, char] of lineArr.entries()) {
      if (char !== " " && char !== "[" && char !== "]") {
        stacks[cratesMapping[index]].push(char);
      }
    }
  }

  // To consider last element on top
  stacks.map((stack) => stack.reverse());

  // Read file again to change our stacks to get our final answer
  const rl3 = readFileByLine(join(__dirname, filename));

  for await (const line of rl3) {
    if (line.includes("move")) {
      const moveLineArr = line.split(" ");
      const numMoves = parseInt(moveLineArr[1]);
      const fromStack = parseInt(moveLineArr[3]) - 1;
      const toStack = parseInt(moveLineArr[5]) - 1;

      for (let i = 0; i < numMoves; i++) {
        stacks[toStack].push(stacks[fromStack].pop());
      }
    }
  }

  const result = stacks.map((stack) => stack[stack.length - 1]).join("");
  return result;
}

export async function day5puzzle2(filename = "day5-input.txt") {
  const rl1 = readFileByLine(join(__dirname, filename));

  let numStacks = 0;
  for await (const line of rl1) {
    // Regex for checking if line only has numbers and spaces
    if (/^[\d ]*$/.test(line)) {
      const numStacksArr = line
        .split(" ")
        .filter((char) => char != "")
      numStacks = parseInt(numStacksArr[numStacksArr.length - 1])
      break;
    }
  }

  const cratesMapping = generateInputCharMapping(numStacks);
  const stacks = Array(numStacks)
    .fill(0)
    .map((_) => Array(0).fill(0));

  const rl2 = readFileByLine(join(__dirname, filename));
  for await (const line of rl2) {
    // empty line means new Elf, Regex is for lines with numbers
    if (line === "" || /\d/.test(line)) {
      continue;
    }

    const lineArr = line.split("");
    for (const [index, char] of lineArr.entries()) {
      if (char !== " " && char !== "[" && char !== "]") {
        stacks[cratesMapping[index]].push(char);
      }
    }
  }

  // To consider last element on top
  stacks.map((stack) => stack.reverse());

  // Read file again to change our stacks to get our final answer
  const rl3 = readFileByLine(join(__dirname, filename));

  for await (const line of rl3) {
    if (line.includes("move")) {
      const moveLineArr = line.split(" ");
      const numMoves = parseInt(moveLineArr[1]);
      const fromStack = parseInt(moveLineArr[3]) - 1;
      const toStack = parseInt(moveLineArr[5]) - 1;

      const cratesToMove = stacks[fromStack].splice(
        stacks[fromStack].length - numMoves
      );

      stacks[toStack].push(...cratesToMove);
    }
  }

  const result = stacks.map((stack) => stack[stack.length - 1]).join("");
  return result;
}
