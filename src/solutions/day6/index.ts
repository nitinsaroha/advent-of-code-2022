import { join } from "path";
import { readFileByLine } from "../../utils";

const isUnique = (packet: string) => {
  const uniquePacket = [...new Set(packet)];
  return uniquePacket.length === packet.length;
};

export async function day6puzzle1(filename = "day6-input.txt") {
  const rl = readFileByLine(join(__dirname, filename));

  for await (const line of rl) {
    // empty line means new Elf
    if (line === "") {
      continue;
    }

    // 1st problem specific
    const slidingWindowNum = 4;
    for (
      let start = 0, end = slidingWindowNum;
      start < line.length;
      start++, end++
    ) {
      const packet = line.slice(start, end);
      if (isUnique(packet)) {
        return end;
      }
    }
  }
}

export async function day6puzzle2(filename = "day6-input.txt") {
  const rl = readFileByLine(join(__dirname, filename));

  for await (const line of rl) {
    // empty line means new Elf
    if (line === "") {
      continue;
    }

    // 2nd problem specific
    const slidingWindowNum = 14;
    for (
      let start = 0, end = slidingWindowNum;
      start < line.length;
      start++, end++
    ) {
      const packet = line.slice(start, end);
      if (isUnique(packet)) {
        return end;
      }
    }
  }
}
