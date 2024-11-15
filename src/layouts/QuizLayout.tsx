import React from "react";

type QuizLayoutPropsT = {
  children: React.ReactNode;
};

export const QuizLayout: React.FC<QuizLayoutPropsT> = ({ children }) => {
  return <div className="quiz">{children}</div>;
};
