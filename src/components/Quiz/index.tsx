import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";
import { addAnswer, setCurQuestion } from "../../redux/slices/quiz/slice";

import { ProgressBar } from "../ProgressBar";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, curQuestion } = useSelector(quizSelector);

  const onChangeAnswer = (index: number) => {
    // Проверяем, чтобы не выйти за пределы массива вопросов
    // if (curQuestion < questions.length - 1) {
    dispatch(
      addAnswer({
        id: index,
        content: questions[curQuestion].answers[index],
        isRightAnswer: questions[curQuestion].rightAnswerId === index,
      })
    );

    dispatch(setCurQuestion());
    // } else {
    //   console.log("Тест завершён!");
    // }
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
