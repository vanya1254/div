import React, { useState } from "react";
import { ProgressBar } from "../ProgressBar";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const [userAnswer, setUserAnswer] = useState<number | null>(null);
  const question: string = "Что такое операционная система?";
  const answers: string[] = [
    `Это просто программа на компьютере, как и другие - Word или Chrome.`,
    `Это показатель того, какой процессор используется на компьютере. Например, 32-битный или 64-битный.`,
    `Это набор взаимосвязанных программ, осуществляющих управление компьютером и взаимодействие с пользователем.`,
    `Нет такого понятия, есть понятие "файловая система".`,
  ];

  const onChangeAnswer = (index: number) => {
    setUserAnswer(index);
  };

  return (
    <div className={styles.root}>
      <fieldset className={styles.root__container}>
        <legend className={styles.root_question}>{question}</legend>
        {answers.map((answer, i) => (
          <label key={i} className={styles.root__answers} htmlFor={`${i}`}>
            <input
              type="radio"
              id={`${i}`}
              name="drop" //TODO
              value={answer}
              onChange={() => onChangeAnswer(i)}
            />
            <div></div>
            {answer}
          </label>
        ))}
      </fieldset>
      <ProgressBar />
    </div>
  );
};
