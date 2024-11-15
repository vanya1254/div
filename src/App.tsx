import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "./redux/slices/quiz/selectors";
import { setCurQuestion } from "./redux/slices/quiz/slice";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz } from "./components/Quiz";

import "./App.scss";

const App: React.FC = () => {
  const isFirstLoad = useRef(true);
  const dispatch = useDispatch();
  const { answers } = useSelector(quizSelector);

  useEffect(() => {
    if (!isFirstLoad.current) {
      //TODO
      dispatch(setCurQuestion());
      console.log(answers);
    }
    console.log(answers);
  }, [answers]);

  return (
    <>
      <QuizLayout>
        <h1 className="title">Тестирование</h1>
        <Quiz />
      </QuizLayout>
    </>
  );
};

export default App;
