import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import useNextCard from '../../logic/useNextCard';
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
} from './UserAnswers.styles';

interface IProps {
  userAnswers: string[];
  score: number;
}

const UserAnswers = ({ userAnswers, score }: IProps) => {
  const { columnsFromBackend } = useNextCard();

  return (
    <>
      <Score>Ти набрав {score} балів</Score>

      <QuestionList>
        {columnsFromBackend.answers.data.map(
          ({ id, question, correctAnswer }, idx) => {
            return (
              <QuestionCard key={id}>
                <div>
                  <Question>{question}</Question>
                  <AnswersList>
                    {correctAnswer.split(' ').map(word => (
                      <Answer key={uuidv4()}>{word}</Answer>
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
            );
          },
        )}
      </QuestionList>
    </>
  );
};

export default UserAnswers;
