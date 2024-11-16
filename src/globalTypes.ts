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

export type CongratsTextsT = {
  [CongratsTextE.Win]: CongratsTextT;
  [CongratsTextE.SemiWin]: CongratsTextT;
  [CongratsTextE.Lose]: CongratsTextT;
};
