import { join } from "path";
import { readFileByLine } from "../../utils";

interface ScoresMapping {
  [key: string]: number;
}

interface PlaysMapping {
  [key: string]: string;
}

const Scores: ScoresMapping = {
  rock: 1,
  paper: 2,
  scissors: 3,
}

const Plays: PlaysMapping = {
  'A': 'rock',
  'B': 'paper',
  'C': 'scissors',
  'X': 'rock',
  'Y': 'paper',
  'Z': 'scissors'
}

const scores = {
  loss: 0,
  draw: 3,
  win: 6,
}

function InValidPlays(): never {
  throw new Error("The play is invalid. Please check your input");
}

function score(computer: string, player: string){
  const computerPlay = Plays[computer]
  const playerPlay = Plays[player]
  
  // We only care about the player 2 score
  const playerScore = Scores[playerPlay]

  switch (true) {
    case computerPlay === playerPlay:
      return Scores[Plays[player]]+ scores.draw
    case computerPlay === 'rock' && playerPlay === 'scissors':
      return playerScore + scores.loss
    case computerPlay === 'scissors' && playerPlay === 'paper':
      return playerScore + scores.loss
    case computerPlay === 'paper' && playerPlay === 'rock':
      return playerScore + scores.loss
    case computerPlay === 'rock' && playerPlay === 'paper':
      return playerScore + scores.win
    case computerPlay === 'scissors' && playerPlay === 'rock':
      return playerScore + scores.win
    case computerPlay === 'paper' && playerPlay === 'scissors':
      return playerScore + scores.win
    default:
      return InValidPlays()
  }
}

export async function day2puzzle1(filename = "day2-input.txt") {
  const rl = readFileByLine( join(__dirname, filename));

  let sum = 0
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      continue
    }
    const [computer, player] = line.split(' ');
    const playerScore = score(computer, player);
    
    if (playerScore){
      sum += playerScore
    }
  }

  return sum
}

// X = lose, Y = draw, Z = win
const Puzzle2Strategy = new Map<string, string>([
  ['A X', 'Z'],
  ['A Y', 'X'],
  ['A Z', 'Y'],
  ['B X', 'X'],
  ['B Y', 'Y'],
  ['B Z', 'Z'],
  ['C X', 'Y'],
  ['C Y', 'Z'],
  ['C Z', 'X'],
]);

export async function day2puzzle2(filename = "day2-input.txt") {
  const rl = readFileByLine( join(__dirname, filename));

  let sum = 0
  for await (const line of rl) {
    // empty line means new Elf
    if (line === ''){
      continue
    }
    const [computer, _] = line.split(' ');
    const player = Puzzle2Strategy.get(line);
    if (player) {
      const playerScore = score(computer, player);
      sum += playerScore
    }
  }

  return sum
}