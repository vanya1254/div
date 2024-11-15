import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { QuestionsState } from "./types";

const initialState: QuestionsState = {
  value: 0,
};

export const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

export const { incrementByAmount } = questionsSlice.actions;

export default questionsSlice.reducer;
