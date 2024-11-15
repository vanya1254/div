import React, { useEffect, useRef } from "react";

import styles from "./ProgressBar.module.scss";
import { useSelector } from "react-redux";
import { quizSelector } from "../../redux/slices/quiz/selectors";

export const ProgressBar: React.FC = () => {
  const progressRef = useRef<HTMLProgressElement>(null);
  const { questions, curQuestion } = useSelector(quizSelector);

  useEffect(() => {
    if (progressRef.current) {
      const progressPercentage = (curQuestion / 10) * 100;
      progressRef.current.style.setProperty(
        "--progress-value",
        `${progressPercentage}%`
      );
      progressRef.current.setAttribute("data-value", `${curQuestion}`);
    }
  }, []);

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
      >
        {curQuestion}
      </progress>
    </div>
  );
};
