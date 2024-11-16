import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";
import { addAnswer, setCurQuestion } from "../../redux/slices/quiz/slice";

import { ProgressBar } from "../";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, curQuestion } = useSelector(quizSelector);

  const onChangeAnswer = (index: number) => {
    dispatch(
      addAnswer({
        id: index,
        content: questions[curQuestion].answers[index].content,
        question: questions[curQuestion].question,
        isRightAnswer: questions[curQuestion].rightAnswerId === index,
      })
    );

    dispatch(setCurQuestion());
  };

  return (
    <div className={styles.root}>
      <fieldset className={styles.root__container}>
        <legend className={styles.root_question}>
          {questions[curQuestion].question}
        </legend>
        {questions[curQuestion].answers.map((answer, i) => (
          <label
            key={answer.content}
            className={styles.root__answers}
            htmlFor={`${answer.id}`}
          >
            <input
              type="radio"
              id={`${answer.id}`}
              name="divQuiz"
              value={answer.content}
              onChange={() => onChangeAnswer(answer.id)}
            />
            <div></div>
            {answer.content}
          </label>
        ))}
      </fieldset>
      <ProgressBar />
    </div>
  );
};
