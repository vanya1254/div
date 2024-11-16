import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QUESTIONS } from "../../../constants";
import { FullAnswerT, QuizState } from "./types";
import { CongratsTextE } from "../../../globalTypes";

const initialState: QuizState = {
  questions: QUESTIONS,
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
    addAnswer: (state, action: PayloadAction<FullAnswerT>) => {
      state.answers.push(action.payload);

      console.log("answer", state.answers[state.answers.length - 1]);
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
  addAnswer,
  setCurQuestion,
  setCorrectAnswers,
  setIncorrectAnswers,
  setCongratsText,
} = quizSlice.actions;

export default quizSlice.reducer;
