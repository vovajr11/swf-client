import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { data } from '../data';

const useNextCard = () => {
  const [questionNumber, setQuestionNumber] = useState(0);

  const words = data[questionNumber].correctAnswer.split(' ').map(word => {
    return {
      id: uuidv4(),
      word,
    };
  });

  const columnsFromBackend = {
    answers: {
      title: 'Доступні слова',
      question: data[questionNumber].question,
      correctAnswer: data[questionNumber].correctAnswer,
      items: words,
      numberOfWords: words.length,
      totalQuestion: data.length,
      data,
    },
    userAnswers: {
      title: 'Склади речення',
      items: [],
    },
  };

  const onNextCard = (number: number) => {
    setQuestionNumber(number);
  };

  return { columnsFromBackend, onNextCard, questionNumber };
};

export default useNextCard;
