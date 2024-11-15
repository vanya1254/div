export interface QuizState {
  questions: QuestionT[];
  answers: AnswerT[];
  curQuestion: number;
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
  isRightAnswer: boolean;
};
