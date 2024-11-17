import { CongratsTextE } from "../../../globalTypes";

/**
 * Интерфейс состояния для квиза.
 *
 * @property {QuestionT[]} questions - Список вопросов для квиза.
 * @property {FullAnswerT[]} answers - Ответы, выбранные пользователем.
 * @property {number} curQuestion - Индекс текущего вопроса.
 * @property {FullAnswerT[]} correctAnswers - Список правильных ответов пользователя.
 * @property {FullAnswerT[]} incorrectAnswers - Список неправильных ответов пользователя.
 * @property {CongratsTextE} congratsText - Текст поздравления на основе результата.
 * @property {boolean} showCongrats - Флаг отображения экрана поздравления.
 */
export interface QuizState {
  questions: QuestionT[];
  answers: FullAnswerT[];
  curQuestion: number;
  correctAnswers: FullAnswerT[];
  incorrectAnswers: FullAnswerT[];
  congratsText: CongratsTextE;
  showCongrats: boolean;
}

/**
 * Тип для представления вопроса.
 *
 * @property {number} id - Уникальный идентификатор вопроса.
 * @property {string} question - Текст вопроса.
 * @property {AnswerT[]} answers - Список возможных ответов на вопрос.
 * @property {number} rightAnswerId - Идентификатор правильного ответа.
 */
export type QuestionT = {
  id: number;
  question: string;
  answers: AnswerT[];
  rightAnswerId: number;
};

/**
 * Тип для представления ответа на вопрос.
 *
 * @property {number} id - Уникальный идентификатор ответа.
 * @property {string} content - Текст ответа.
 */
export type AnswerT = {
  id: number;
  content: string;
};

/**
 * Интерфейс для полного ответа пользователя.
 * Наследуется от AnswerT и добавляет дополнительные поля.
 *
 * @property {string} question - Текст вопроса, на который дан ответ.
 * @property {boolean} isRightAnswer - Флаг, указывающий, является ли ответ правильным.
 */
export interface FullAnswerT extends AnswerT {
  question: string;
  isRightAnswer: boolean;
}
