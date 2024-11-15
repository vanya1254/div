import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./types";
import { QUESTIONS } from "../../../constants";

const initialState: QuestionsState = {
  questions: QUESTIONS,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {},
  },
});

export const { incrementByAmount } = questionsSlice.actions;

export default questionsSlice.reducer;
