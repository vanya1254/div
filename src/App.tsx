import React from "react";

import { QuizLayout } from "./layouts/QuizLayout";
import { Quiz } from "./components/Quiz";

import "./App.scss";

const App: React.FC = () => {
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
