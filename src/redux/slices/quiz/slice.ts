import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { AnswerT, QuizState } from "./types";
import { QUESTIONS } from "../../../constants";

const initialState: QuizState = {
  questions: QUESTIONS,
  answers: [],
  curQuestion: 1,
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  reducers: {
    addAnswer: (state, action: PayloadAction<AnswerT>) => {
      state.answers.push(action.payload);

      console.log("answer", state.answers[state.answers.length - 1]);
    },
    setCurQuestion: (state) => {
      state.curQuestion += 1;
    },
  },
});

export const { addAnswer, setCurQuestion } = quizSlice.actions;

export default quizSlice.reducer;
