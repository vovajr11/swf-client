import React from 'react';

interface IProps {
  //   questionNumber: number;
  //   totalQuestion: number;
  question: string;
  answers: string[];
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
}

const QuestionCard = ({ question, answers, setUserAnswer }: IProps) => {
  return (
    <div>
      <h2>Питання: {question}</h2>
      <ul>
        {answers.map(answer => (
          <li onClick={() => setUserAnswer(answer)}>{answer}</li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionCard;
