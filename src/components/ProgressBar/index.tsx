import React, { useEffect, useRef } from "react";
import { shallowEqual, useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";

import styles from "./ProgressBar.module.scss";

export const ProgressBar: React.FC = () => {
  const { questions, curQuestion } = useSelector(quizSelector, shallowEqual);
  const progressRef = useRef<HTMLProgressElement>(null);

  useEffect(() => {
    if (progressRef.current) {
      const progressPercentage = (curQuestion / questions.length) * 100;
      progressRef.current.style.setProperty(
        "--progress-value",
        `${progressPercentage}%`
      );
      progressRef.current.setAttribute("data-value", `${curQuestion || ""}`);
    }
  }, [curQuestion, questions.length]);

  return (
    <div className={styles.root}>
      <label htmlFor="test" className={styles.root__range}>
        <span>0</span>
        <span>{questions.length}</span>
      </label>
      <progress
        ref={progressRef}
        id="test"
        max={questions.length}
        value={curQuestion}
        data-value={curQuestion}
        className={styles.root__progress}
      ></progress>
    </div>
  );
};
