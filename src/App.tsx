import React from "react";

import { QuizLayout } from "./layouts/QuizLayout";

import "./App.scss";

const App: React.FC = () => {
  return (
    <>
      <QuizLayout>
        <h1 className="title">Тестирование</h1>
      </QuizLayout>
    </>
  );
};

export default App;
