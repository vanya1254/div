import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUESTIONS, SPECIAL_QUESTION } from "../../../constants";
import { FullAnswerT, QuestionT, QuizState } from "./types";
import { CongratsTextE } from "../../../globalTypes";
import { shuffleArray } from "../../../utils/shuflleArray";

const initialState: QuizState = {
  questions: [],
  answers: [],
  curQuestion: 0,
  correctAnswers: [],
  incorrectAnswers: [],
  congratsText: CongratsTextE.Win,
  showCongrats: false,
};

/**
 * Слайс состояния для квиза, содержащий редюсеры для управления логикой квиза.
 */
export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    /**
     * Перемешивает список вопросов и добавляет специальный вопрос в конец.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    setShuffleQuestions: (state) => {
      const questionsCopy = JSON.parse(JSON.stringify(QUESTIONS)).map(
        (question: QuestionT) => ({
          ...question,
          answers: shuffleArray(question.answers),
        })
      ) as QuestionT[];

      state.questions = shuffleArray(questionsCopy);

      state.questions.push(SPECIAL_QUESTION);
    },
    /**
     * Добавляет ответ пользователя в массив ответов.
     * @param {QuizState} state - Текущее состояние квиза.
     * @param {PayloadAction<FullAnswerT>} action - Ответ пользователя.
     */
    addAnswer: (state, action: PayloadAction<FullAnswerT>) => {
      state.answers.push(action.payload);
    },
    /**
     * Переходит к следующему вопросу.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    setCurQuestion: (state) => {
      state.curQuestion += 1;
    },
    /**
     * Устанавливает массив правильных ответов на основе ответов пользователя.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    setCorrectAnswers: (state) => {
      state.correctAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === true
      );
    },
    /**
     * Устанавливает массив неправильных ответов на основе ответов пользователя.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    setIncorrectAnswers: (state) => {
      state.incorrectAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === false
      );
    },
    /**
     * Устанавливает текст поздравления в зависимости от результата квиза.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    setCongratsText: (state) => {
      if (state.correctAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Win;
      } else if (state.incorrectAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Lose;
      } else {
        state.congratsText = CongratsTextE.SemiWin;
      }
    },
    /**
     * Отображает экран поздравления.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    showCongratsScreen: (state) => {
      state.showCongrats = true;
    },
    /**
     * Завершает квиз и рассчитывает результаты.
     * @param {QuizState} state - Текущее состояние квиза.
     */
    finalizeQuiz: (state) => {
      state.correctAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === true
      );
      state.incorrectAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === false
      );

      if (state.correctAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Win;
      } else if (state.incorrectAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Lose;
      } else {
        state.congratsText = CongratsTextE.SemiWin;
      }

      state.showCongrats = true;
    },
    /**
     * Сбрасывает состояние квиза к начальному состоянию.
     * @returns {QuizState} - Начальное состояние квиза.
     */
    resetQuiz: () => {
      return initialState;
    },
  },
});

/**
 * Экспорт действий для использования в компонентах.
 */
export const {
  setShuffleQuestions,
  addAnswer,
  setCurQuestion,
  setCorrectAnswers,
  setIncorrectAnswers,
  setCongratsText,
  showCongratsScreen,
  finalizeQuiz,
  resetQuiz,
} = quizSlice.actions;

export default quizSlice.reducer;
