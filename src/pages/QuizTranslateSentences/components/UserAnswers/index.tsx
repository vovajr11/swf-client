import React from 'react';
import { IQuestion } from '@interfaces/quizTranslateSentences.interface';
import { QuestionList, QuestionItem, UserAnswer } from './UserAnswers.styles';

interface IProps {
  questions: IQuestion[];
  userAnswers: string[];
}

const testArr = [
  'You don’t try to learn English',
  'He doesn’t have this information',
  'He doesn’t want to try to find a good job',
  'My friend doesn’t think so',
  'We don’t want to live in another place',
];

const UserAnswers = ({ questions, userAnswers }: IProps) => {
  return (
    <QuestionList>
      {questions.map(
        ({ id, sentenceToBeTranslated, translatedSentence }, idx) => (
          <QuestionItem key={id}>
            <div className="col">
              <h3>Речення: {sentenceToBeTranslated}</h3>
              <h3>Переклад: {translatedSentence}</h3>
            </div>
            <div className="col">
              <UserAnswer>
                Твоя відповідь: <br /> {userAnswers[idx]}
              </UserAnswer>
            </div>
          </QuestionItem>
        ),
      )}
    </QuestionList>
  );
};

export default UserAnswers;
