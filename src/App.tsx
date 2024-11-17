import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "./redux/slices/quiz/selectors";
import {
  setCongratsText,
  setCorrectAnswers,
  setIncorrectAnswers,
  setShuffleQuestions,
  showCongratsScreen,
} from "./redux/slices/quiz/slice";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz, Congrats } from "./components";

import { CONGRATS_TEXTS } from "./constants";

import "./App.scss";

const App: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, answers, congratsText, showCongrats } =
    useSelector(quizSelector);

  useEffect(() => {
    if (questions.length === 0) {
      dispatch(setShuffleQuestions());
    }
  }, [questions, dispatch]);

  useEffect(() => {
    if (questions.length > 0 && answers.length === questions.length) {
      dispatch(setCorrectAnswers());
      dispatch(setIncorrectAnswers());
      dispatch(setCongratsText());

      setTimeout(() => dispatch(showCongratsScreen()), 1000);
    }
  }, [answers, questions, dispatch]);

  const isQuizCompleted = questions.length === answers.length;

  return (
    <>
      <QuizLayout>
        <h1 className="title">
          {isQuizCompleted
            ? CONGRATS_TEXTS[congratsText].title
            : "Тестирование"}
        </h1>
        {isQuizCompleted ? (
          showCongrats ? (
            <Congrats />
          ) : (
            "Loading..."
          )
        ) : (
          <Quiz />
        )}
      </QuizLayout>
    </>
  );
};

export default App;
