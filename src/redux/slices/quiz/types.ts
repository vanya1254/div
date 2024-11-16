import { CongratsTextE } from "../../../globalTypes";

export interface QuizState {
  questions: QuestionT[];
  answers: FullAnswerT[];
  curQuestion: number;
  correctAnswers: FullAnswerT[];
  incorrectAnswers: FullAnswerT[];
  congratsText: CongratsTextE;
}

export type QuestionT = {
  id: number;
  question: string;
  answers: AnswerT[];
  rightAnswerId: number;
};

export type AnswerT = {
  id: number;
  content: string;
};

export interface FullAnswerT extends AnswerT {
  question: string;
  isRightAnswer: boolean;
}
