import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { IQuestion } from '@interfaces/quizTranslateSentences.interface';
import Button from '@components/Button';
import ProgressBar from '@components/ProgressBar';
import QuestionCard from './components/QuestionCard';
import UserAnswers from './components/UserAnswers';
import { getQuizById } from '@api/quizzes/translateSentences';
import { saveTheResultOfTheQuiz } from '@api/user';
import { useAppSelector } from '@hooks/appHook';
import { Wrapp } from './QuizTranslateSentences.styles';

export const QuizTranslateSentences = () => {
  let { quizId = '', quizName = '' } = useParams();

  const [gameOver, setGameOver] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [userAnswer, setUserAnswer] = useState('');
  const [qustionNumber, setQuestionNumber] = useState(0);
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
  }, [qustionNumber, questions.length]);

  const nextQuestion = () => {
    const nextQ = qustionNumber + 1;

    setUserAnswers(prevState => {
      return [...prevState, userAnswer];
    });

    if (nextQ === totalQuestion) {
      setGameOver(true);
      setShowQuiz(true);

      saveTheResultOfTheQuiz({
        userId,
        quizId,
        quizName,
        quizType: 'translate-sentences',
        score: null,
        answers: userAnswers.slice(1),
      });
    } else {
      setQuestionNumber(nextQ);
    }
  };

  return (
    <Wrapp>
      {!gameOver && (
        <>
          <h2>Переклади речення</h2>

          <QuestionCard
            question={questions[qustionNumber].sentenceToBeTranslated}
            setUserAnswer={setUserAnswer}
            qustionNumber={qustionNumber}
          />

          <Button
            disabled={userAnswer === '' ? true : false}
            className="next-question"
            type="button"
            size="lg"
            onClick={() => nextQuestion()}
          >
            {totalQuestion === qustionNumber + 1 ? 'Finish' : 'Next'}
          </Button>

          <ProgressBar progress={progress} />
        </>
      )}

      {showQuiz && (
        <UserAnswers questions={questions} userAnswers={userAnswers.slice(1)} />
      )}
    </Wrapp>
  );
};
