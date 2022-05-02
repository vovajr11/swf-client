import React, { useState } from 'react';
import { Question, AnswerList, Answer } from './QuestionCard.styles';
import { v4 as uuidv4 } from 'uuid';

interface IProps {
  //   questionNumber: number;
  //   totalQuestion: number;
  question: string;
  answers: string[];
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const QuestionCard = ({ question, answers, setUserAnswer }: IProps) => {
  const [currentAnswer, setCurrentUnswer] = useState('');
  return (
    <div>
      <Question>Питання: {question}</Question>
      <AnswerList>
        {answers.map(answer => (
          <Answer
            className={answer === currentAnswer ? 'active' : ''}
            key={uuidv4()}
            onClick={() => {
              setUserAnswer(answer);
              setCurrentUnswer(answer);
            }}
          >
            {answer}
          </Answer>
        ))}
      </AnswerList>
    </div>
  );
};

export default QuestionCard;
