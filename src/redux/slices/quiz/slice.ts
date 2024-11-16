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
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
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
    addAnswer: (state, action: PayloadAction<FullAnswerT>) => {
      state.answers.push(action.payload);
    },
    setCurQuestion: (state) => {
      state.curQuestion += 1;
    },
    setCorrectAnswers: (state) => {
      state.correctAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === true
      );
    },
    setIncorrectAnswers: (state) => {
      state.incorrectAnswers = state.answers.filter(
        (answer) => answer.isRightAnswer === false
      );
    },
    setCongratsText: (state) => {
      if (state.correctAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Win;
      } else if (state.incorrectAnswers.length === state.answers.length) {
        state.congratsText = CongratsTextE.Lose;
      } else {
        state.congratsText = CongratsTextE.SemiWin;
      }
    },
  },
});

export const {
  setShuffleQuestions,
  addAnswer,
  setCurQuestion,
  setCorrectAnswers,
  setIncorrectAnswers,
  setCongratsText,
} = quizSlice.actions;

export default quizSlice.reducer;
