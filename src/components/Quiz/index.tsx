import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";
import { addAnswer } from "../../redux/slices/quiz/slice";

import { ProgressBar } from "../ProgressBar";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, curQuestion } = useSelector(quizSelector);

  const onChangeAnswer = (index: number) => {
    dispatch(
      addAnswer({
        id: index,
        content: questions[curQuestion].answers[index],
        isRightAnswer: questions[curQuestion].rightAnswerId === index,
      })
    );
    console.log(111);
  };

  return (
    <div className={styles.root}>
      <fieldset className={styles.root__container}>
        <legend className={styles.root_question}>
          {questions[curQuestion].question}
        </legend>
        {questions[curQuestion].answers.map((answer, i) => (
          <label key={i} className={styles.root__answers} htmlFor={`${i}`}>
            <input
              type="radio"
              id={`${i}`}
              name="divQuiz"
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
