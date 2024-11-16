import { CongratsTextE } from "../../../globalTypes";

export interface QuizState {
  questions: QuestionT[];
  answers: AnswerT[];
  curQuestion: number;
  correctAnswers: AnswerT[];
  incorrectAnswers: AnswerT[];
  congratsText: CongratsTextE;
}

export type QuestionT = {
  id: number;
  question: string;
  answers: string[];
  rightAnswerId: number;
};

export type AnswerT = {
  id: number;
  content: string;
  question: string;
  isRightAnswer: boolean;
};
