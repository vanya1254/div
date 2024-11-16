import React from "react";
import { useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";

import { CustomBtn } from "../";

import { CongratsTextE } from "../../globalTypes";
import { CONGRATS_TEXTS } from "../../constants";

import styles from "./Congrats.module.scss";

export const Congrats: React.FC = () => {
  const { answers, congratsText, correctAnswers } = useSelector(quizSelector);

  const congrats =
    congratsText === CongratsTextE.SemiWin
      ? CONGRATS_TEXTS[congratsText].text.replace(
          "5",
          `${correctAnswers.length}`
        )
      : CONGRATS_TEXTS[congratsText].text;

  return (
    <div className={styles.root}>
      <p className={styles.root_text}>{congrats}</p>
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
      {congratsText === CongratsTextE.Win ? (
        ""
      ) : (
        <CustomBtn onClick={() => window.location.reload()}>
          Пройти еще раз
        </CustomBtn>
      )}
    </div>
  );
};
