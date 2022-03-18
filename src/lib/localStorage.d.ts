export type Stats = {
  gamesWon: number;
  lastWin: string;
  currentStreak: number;
  maxStreak: number;
  usedGuesses: number[];
};

export type Guesses = {
  day: string;
  countries: string[];
}
