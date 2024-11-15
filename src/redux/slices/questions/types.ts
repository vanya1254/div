export interface QuestionsState {
  questions: Question[];
}

export type Question = {
  id: number;
  question: string;
  answers: string[];
  rightAnswer: number;
};
