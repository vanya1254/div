import React from "react";

type QuizLayotType = {
  children: React.ReactNode;
};

export const QuizLayout: React.FC<QuizLayotType> = ({ children }) => {
  return <div>{children}</div>;
};
