import { join } from "path";
import * as fs from "fs";
import * as readline from "readline";

export async function day1puzzle1(filename = 'day1-input.txt') {
  const fileStream = fs.createReadStream( join(__dirname, filename), 'utf-8');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let max = Number.MIN_VALUE
  let sum = 0
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      max = Math.max(max, sum)
      sum = 0
      continue
    }
    sum += parseInt(line);
  }
  return max
}

export async function day1puzzle2(filename = 'day1-input.txt') {
  const fileStream = fs.createReadStream( join(__dirname, filename), 'utf-8');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  const allSums: number[] = [];
  let sum = 0

  // How to improve? Maintain a min-heap of top k elements
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      allSums.push(sum)
      sum = 0
      continue
    }
    sum += Number(line);
  }

  allSums.sort((a, b) => a - b).reverse()
  return allSums.slice(0, 3).reduce((a, b) => a + b)
}