export enum CongratsTextE {
  Win = "WIN",
  SemiWin = "SEMIWIN",
  Lose = "LOSE",
}

export type CongratsTextT = {
  title: string;
  text: string;
  type: CongratsTextE;
};
