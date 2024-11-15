import React, { useState } from "react";
import { ProgressBar } from "../ProgressBar";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState(0);
  const answers: string[] = [""];

  return (
    <div className={styles.root}>
      <fieldset className={styles.root__container}>
        <legend className={styles.root_question}></legend>
        {answers.map((answer, i) => (
          <div>
            <input
              type="radio"
              id={`${i}`}
              name="drone"
              value={answer}
              checked
            />
            <label htmlFor={`${i}`}>{answer}</label>
          </div>
        ))}
      </fieldset>
      <ProgressBar />
    </div>
  );
};
