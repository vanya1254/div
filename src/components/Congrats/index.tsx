import React from "react";

import styles from "./Congrats.module.scss";
import { useSelector } from "react-redux";
import { quizSelector } from "../../redux/slices/quiz/selectors";

export const Congrats: React.FC = () => {
  const { answers } = useSelector(quizSelector);

  const getCongratsText = () => {
    return;
  };

  return (
    <div className={styles.root}>
      <p className={styles.root_text}></p>
      <ul className={styles.root__answers}>
        {answers.map((answer, i) => (
          <li
            key={i}
            className={`${styles.root__answer} ${
              answer.isRightAnswer
                ? styles.root__answer_right
                : styles.root__answer_wrong
            }`}
          >
            <h4 className={styles.root__answer_title}>{answer.question}</h4>
            <p className={styles.root__answer_text}>{answer.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
