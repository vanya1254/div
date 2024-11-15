import { configureStore } from "@reduxjs/toolkit";
import quiz from "./slices/quiz/slice";

export const store = configureStore({
  reducer: { quiz },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
