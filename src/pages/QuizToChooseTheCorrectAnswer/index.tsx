import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getQuizById } from '@api/quizzes/chooseTheCorrectAnswer';
import { saveTheResultOfTheQuiz } from '@api/user';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import { IQuestion } from '@interfaces/quizToChooseTheCorrectAnswer.interface';
import { useAppSelector } from '@hooks/appHook';
import QuestionCard from './components/QuestionCard';
import UserAnswers from './components/UserAnswers';
import { Wrapper } from './QuizToChooseTheCorrectAnswer.styles';

export const QuizToChooseTheCorrectAnswer = () => {
  let { quizId = '', quizName = '' } = useParams();

  const [gameOver, setGameOver] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [number, setNumber] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [totalQuestion, setTotalQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState(['']);

  const userId = useAppSelector(state => state.session.user.id);

  useEffect(() => {
    (async () => {
      const data = await getQuizById(quizId);

      if (data !== undefined) {
        setQuestions(data);
        setTotalQuestion(data.length);
      }

      setGameOver(false);
    })();
  }, []);

  useEffect(() => {
    if (questions.length > 0) {
      setProgress(prevState => prevState + 100 / questions.length);
    }
  }, [number, questions.length]);

  const nextQuestion = () => {
    setUserAnswers(prevState => {
      return [...prevState, userAnswer];
    });

    if (userAnswer === questions[number].correctAnswer) {
      setScore(prevState => prevState + 1);
    }

    const nextQ = number + 1;

    if (nextQ === totalQuestion) {
      setGameOver(true);
      setShowQuiz(true);
    } else {
      setNumber(nextQ);
    }
  };

  if (showQuiz) {
    saveTheResultOfTheQuiz({
      userId,
      quizId,
      quizName,
      quizType: 'chooseTheCorrectAnswer',
      score,
      answers: userAnswers.slice(1),
    });
  }

  return (
    <Wrapper>
      {!gameOver && (
        <>
          <QuestionCard
            question={questions[number].question}
            answers={questions[number].answers}
            setUserAnswer={setUserAnswer}
          />

          <Button
            disabled={userAnswer === '' ? true : false}
            className="next-question"
            type="button"
            onClick={nextQuestion}
          >
            {totalQuestion === number + 1 ? 'Finish' : 'Next'}
          </Button>

          <ProgressBar progress={progress} />
        </>
      )}

      {showQuiz && (
        <UserAnswers
          score={score}
          questions={questions}
          userAnswers={userAnswers}
        />
      )}
    </Wrapper>
  );
};
