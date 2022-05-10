import React, { useEffect, useState } from 'react';
import Input from '@components/Input';
import { Wrapp, Question, InputWrapp } from './QuestionCard.styles';

interface IProps {
  question: string;
  setUserAnswer: React.Dispatch<React.SetStateAction<string>>;
  qustionNumber: number;
}

const QuestionCard = ({ question, setUserAnswer, qustionNumber }: IProps) => {
  const [value, setValue] = useState('');

  const handleChange = (event: any) => {
    setValue(event.target.value);
    setUserAnswer(event.target.value);
  };

  useEffect(() => setValue(''), [qustionNumber]);

  return (
    <Wrapp>
      <Question>{question}</Question>
      <InputWrapp>
        <Input
          type="text"
          placeholder="Переклад"
          value={value}
          onChange={handleChange}
        />
      </InputWrapp>
    </Wrapp>
  );
};

export default QuestionCard;
