import React, { useEffect, useMemo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { quizSelector } from "./redux/slices/quiz/selectors";
import {
  setCongratsText,
  setCorrectAnswers,
  setIncorrectAnswers,
  setShuffleQuestions,
  showCongratsScreen,
} from "./redux/slices/quiz/slice";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz, Congrats, Loader } from "./components";

import { CONGRATS_TEXTS } from "./constants";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, answers, congratsText, showCongrats } = useSelector(
    quizSelector,
    shallowEqual
  );

  const isQuizCompleted = useMemo(
    () => questions.length > 0 && questions.length === answers.length,
    [questions, answers]
  );

  useEffect(() => {
    if (questions.length === 0) dispatch(setShuffleQuestions());
  }, [questions.length, dispatch]);

  useEffect(() => {
    if (isQuizCompleted) {
      dispatch(setCorrectAnswers());
      dispatch(setIncorrectAnswers());
      dispatch(setCongratsText());

      setTimeout(() => dispatch(showCongratsScreen()), 1000);
    }
  }, [isQuizCompleted, dispatch]);

  return (
    <>
      <QuizLayout>
        <h1 className="title">
          {isQuizCompleted
            ? CONGRATS_TEXTS[congratsText].title
            : "Тестирование"}
        </h1>
        {isQuizCompleted ? showCongrats ? <Congrats /> : <Loader /> : <Quiz />}
      </QuizLayout>
    </>
  );
};

export default App;
