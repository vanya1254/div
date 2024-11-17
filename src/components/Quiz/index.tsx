import React, { useCallback, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";

import { quizSelector } from "../../redux/slices/quiz/selectors";
import { addAnswer, setCurQuestion } from "../../redux/slices/quiz/slice";

import { Loader, ProgressBar } from "../";

import styles from "./Quiz.module.scss";

export const Quiz: React.FC = () => {
  const dispatch = useDispatch();
  const { questions, curQuestion } = useSelector(quizSelector, shallowEqual);
  const [isAnswered, setIsAnswered] = useState(false);

  const onChangeAnswer = useCallback(
    (index: number) => {
      if (isAnswered) return;
      setIsAnswered(true);

      const question = questions[curQuestion];
      const userAnswer = question.answers.filter(
        (answer) => answer.id === index
      )[0];

      dispatch(
        addAnswer({
          id: index,
          content: userAnswer.content,
          question: question.question,
          isRightAnswer: question.rightAnswerId === index,
        })
      );

      setTimeout(() => {
        dispatch(setCurQuestion());
        setIsAnswered(false);
      }, 1000);
    },
    [isAnswered, questions, curQuestion, dispatch]
  );

  if (!questions[curQuestion]) {
    return <Loader />;
  }

  return (
    <div className={styles.root}>
      <fieldset className={styles.root__container}>
        <legend className={styles.root_question}>
          {questions[curQuestion].question}
        </legend>
        {questions[curQuestion].answers.map((answer) => (
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
              disabled={isAnswered}
              onChange={() => onChangeAnswer(answer.id)}
            />
            <span></span>
            {answer.content}
          </label>
        ))}
      </fieldset>
      <ProgressBar />
    </div>
  );
};
