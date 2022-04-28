import React, { useState } from 'react';
import QuestionCard from './QuestionCard';
import data from './data.json';

interface IQuestion {
  question: string;
  correctAnswer: string;
  answers: string[];
}

const TOTAL_QUESTIONS = 2;

const Quiz = () => {
  const [gameOver, setGameOver] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState(['']);

  const startQuiz = () => {
    setGameOver(false);
    setQuestions(data);
  };

  const nextQuestion = () => {
    const nextQ = number + 1;

    if (nextQ === TOTAL_QUESTIONS) {
      setGameOver(true);
      setShowQuiz(true);
    } else {
      setNumber(nextQ);
    }
  };

  const checkAnswer = () => {
    setUserAnswers(prevState => {
      return [...prevState, userAnswer];
    });
  };

  if (showQuiz) {
    console.log(userAnswers, 'userAnswers');
  }

  return (
    <div>
      {gameOver && <button onClick={startQuiz}>Start</button>}

      {!gameOver && (
        <>
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            setUserAnswer={setUserAnswer}
          />

          <button
            onClick={() => {
              nextQuestion();
              checkAnswer();
            }}
          >
            {TOTAL_QUESTIONS === number + 1 ? 'Finish' : 'Next'}
          </button>
        </>
      )}

      {showQuiz && (
        <>
          {data.map((item, idx) => (
            <li>
              <p>Питання: {item.question}</p>
              <p>Відповідь: {userAnswers[idx + 1]}</p>
            </li>
          ))}
        </>
      )}
    </div>
  );
};

export default Quiz;
