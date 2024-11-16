import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import { quizSelector } from "./redux/slices/quiz/selectors";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz } from "./components/Quiz";

import "./App.scss";
import { Congrats } from "./components/Congrats";

const App: React.FC = () => {
  const isFirstLoad = useRef(true);
  const { questions, answers } = useSelector(quizSelector);

  useEffect(() => {
    if (!isFirstLoad.current) {
      isFirstLoad.current = false;
    }
    console.log("Текущие ответы:", answers);
  }, [answers]);

  return (
    <>
      <QuizLayout>
        <h1 className="title">Тестирование</h1>
        {questions.length === answers.length ? <Congrats /> : <Quiz />}
      </QuizLayout>
    </>
  );
};

export default App;
