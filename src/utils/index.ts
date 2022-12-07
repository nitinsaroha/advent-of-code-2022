import * as fs from "fs";
import * as readline from "readline";

export const readFileByLine = (filename: string) => {
  const fileStream = fs.createReadStream( filename, 'utf-8');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  
  return rl
}
