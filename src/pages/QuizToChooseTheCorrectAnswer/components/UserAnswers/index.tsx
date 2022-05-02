import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import { TQuestion } from '@interfaces/quizToChooseTheCorrectAnswer.interface';
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
import { Box } from '@mui/material';

interface IProps {
  score: number;
  questions: TQuestion[];
  userAnswers: string[];
}

const UserAnswers = ({ score, questions, userAnswers }: IProps) => {
  return (
    <>
      <Score>Ти набрав {score} балів</Score>
      <QuestionList>
        {questions.map(({ _id, question, correctAnswer }, idx) => (
          <QuestionCard key={_id}>
            {/* <Box
              sx={{ display: 'flex', alignItems: 'center', marginTop: '15px' }}
            > */}
            <div>
              <Question>Питання: {question}</Question>
              <AnswersList>
                {userAnswers.slice(1).map(item => (
                  <Answer key={uuidv4()}>{item}</Answer>
                ))}
              </AnswersList>
            </div>

            <AnswerInfo>
              <UserAnswer
                className={
                  userAnswers[idx + 1] === correctAnswer
                    ? 'correct'
                    : 'uncorrect'
                }
              >
                Твоя відповідь: <span>{userAnswers[idx + 1]}</span>
              </UserAnswer>

              <CorrectAnswer>
                Вірна відповідь: <br /> {correctAnswer}
              </CorrectAnswer>
            </AnswerInfo>
            {/* </Box> */}
          </QuestionCard>
        ))}
      </QuestionList>
    </>
  );
};

export default UserAnswers;
