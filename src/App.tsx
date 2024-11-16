import React, { useEffect, useRef, useState } from "react";
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

  const [showCongrats, setShowCongrats] = useState(false);

  useEffect(() => {
    if (isFirstLoad.current) {
      dispatch(setShuffleQuestions());
      isFirstLoad.current = false;
    }
  }, []);

  useEffect(() => {
    if (answers.length === questions.length) {
      dispatch(setCorrectAnswers());
      dispatch(setIncorrectAnswers());
      dispatch(setCongratsText());

      setTimeout(() => setShowCongrats(true), 1000);
    }
  }, [answers]);

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
