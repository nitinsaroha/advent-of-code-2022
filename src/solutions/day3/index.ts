import { join } from "path";
import { readFileByLine } from "../../utils";

interface Character {
  key: string;
  value: number
}

export const lowUpCharacters = () => {
  const lowerAlpha = Array.from(Array(26)).map((e, i) => i + 97);
  const upperAlpha = Array.from(Array(26)).map((e, i) => i + 65);
  const lowercase = lowerAlpha.map((x, i) => {
    const obj: Character = {
      key: String.fromCharCode(x),
      value: i + 1
    }
    return obj
  });
  const uppercase = upperAlpha.map((x, i) => {
    const obj: Character = {
      key: String.fromCharCode(x),
      value: i + 27
    }
    return obj
  });

  return [...lowercase, ...uppercase]
}

export const duplicateChar = (...items: string[]) => {
  const itemsArr = items.map(str => str.split(''));
  // We only want one value but filter returns the whole array of same values
  const duplicateItem = itemsArr.reduce((p,c) => p.filter(e => c.includes(e)))[0];
  return duplicateItem
}

export const charPriority = (char: string): number | undefined => {
  const charDictionary = lowUpCharacters()
  const item = charDictionary.find((el) => {
    if (el.key === char){
      return el.value
    }
  })
  return item?.value
}

export async function day3puzzle1(filename = 'day3-input.txt') {
  const rl = readFileByLine( join(__dirname, filename));

  let sum = 0
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      continue
    }
    // split string into two halves
    const items = [line.substring(0, (line.length / 2)), line.substring((line.length / 2), line.length)];
    const duplicateItemChar = duplicateChar(items[0], items[1])
    const duplicateItemCharPriority = charPriority(duplicateItemChar!)
    if (duplicateItemCharPriority){
      sum += duplicateItemCharPriority
    }
  }

  return sum
}

export async function day3puzzle2(filename = 'day3-input.txt') {
  const rl = readFileByLine( join(__dirname, filename));

  const groupLines: string[] = []
  let sum = 0
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      continue
    }

    groupLines.push(line)

    if (groupLines.length === 3){
      const duplicateItemChar = duplicateChar(...groupLines)
      const duplicateItemCharPriority = charPriority(duplicateItemChar)
      if (duplicateItemCharPriority){
        sum += duplicateItemCharPriority
      }
      groupLines.length = 0
    } 
  }
  
  return sum
}