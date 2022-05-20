import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { IQuestion } from '@interfaces/quizToChooseTheCorrectAnswer.interface';
import { getQuizById } from '@api/quizzes/chooseTheCorrectAnswer';
import {
  Score,
  QuestionList,
  QuestionCard,
  Question,
  AnswersList,
  Answer,
  AnswerInfo,
  UserAnswer,
  CorrectAnswer,
} from './QuizResultsToChooseCorrectAnswer.styles';

interface IProps {
  quizId: string;
  quizName: string;
  answers: string[];
  score: number | null | undefined;
}

const QuizResultsToChooseCorrectAnswer = ({
  quizId,
  quizName,
  answers: userAnswers,
  score,
}: IProps) => {
  const [questions, setQuestions] = useState<IQuestion[] | undefined>();

  useEffect(() => {
    (async () => {
      const data = await getQuizById(quizId);

      setQuestions(data);
    })();
  }, []);

  return (
    <div>
      <Score>Ти набрав {score} балів</Score>
      <QuestionList>
        {questions !== undefined && (
          <>
            {questions.map(({ _id, question, correctAnswer }, idx) => (
              <QuestionCard key={_id}>
                <div>
                  <Question>Питання: {question}</Question>
                  <AnswersList>
                    {userAnswers.map(item => (
                      <Answer key={uuidv4()}>{item}</Answer>
                    ))}
                  </AnswersList>
                </div>

                <AnswerInfo>
                  <UserAnswer
                    className={
                      userAnswers[idx] === correctAnswer
                        ? 'correct'
                        : 'uncorrect'
                    }
                  >
                    Твоя відповідь: <span>{userAnswers[idx]}</span>
                  </UserAnswer>

                  <CorrectAnswer>
                    Вірна відповідь: <br /> {correctAnswer}
                  </CorrectAnswer>
                </AnswerInfo>
              </QuestionCard>
            ))}
          </>
        )}
      </QuestionList>
    </div>
  );
};

export default QuizResultsToChooseCorrectAnswer;
