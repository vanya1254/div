import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "./redux/slices/quiz/selectors";
import {
  setCongratsText,
  setCorrectAnswers,
  setIncorrectAnswers,
  setShuffleQuestions,
} from "./redux/slices/quiz/slice";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz, Congrats } from "./components";

import { CONGRATS_TEXTS } from "./constants";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const isFirstLoad = useRef(true);
  const { questions, answers, congratsText } = useSelector(quizSelector);

  useEffect(() => {
    if (isFirstLoad.current) {
      dispatch(setShuffleQuestions());
    }
  }, []);

  useEffect(() => {
    if (!isFirstLoad.current) {
      isFirstLoad.current = false;
    }

    if (answers.length === questions.length) {
      dispatch(setCorrectAnswers());
      dispatch(setIncorrectAnswers());
      dispatch(setCongratsText());
    }
  }, [answers]);

  return (
    <>
      <QuizLayout>
        <h1 className="title">
          {questions.length === answers.length
            ? CONGRATS_TEXTS[congratsText].title
            : "Тестирование"}
        </h1>
        {questions.length === answers.length ? <Congrats /> : <Quiz />}
      </QuizLayout>
    </>
  );
};

export default App;
