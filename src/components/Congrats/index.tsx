import React from "react";
import { useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";
import { CongratsTextE } from "../../globalTypes";
import { CONGRATS_TEXTS } from "../../constants";

import styles from "./Congrats.module.scss";

export const Congrats: React.FC = () => {
  const { answers } = useSelector(quizSelector);

  const congratsText = (() => {
    const correctAnswers = answers.filter(
      (answer) => answer.isRightAnswer === true
    );
    const incorrectAnswers = answers.filter(
      (answer) => answer.isRightAnswer === false
    );

    if (correctAnswers.length === answers.length) {
      return CongratsTextE.Win;
    } else if (incorrectAnswers.length === answers.length) {
      return CongratsTextE.Lose;
    } else {
      return CongratsTextE.SemiWin;
    }
  })();

  return (
    <div className={styles.root}>
      <p className={styles.root_text}>{CONGRATS_TEXTS[congratsText].text}</p>
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
      <button></button>
    </div>
  );
};
