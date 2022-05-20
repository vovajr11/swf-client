import { useState } from 'react';
import Button from '@components/Button';
import Modal from '@components/Modal';
import useToggle from '@hooks/useToggle';
import { ICompletedQuiz } from '@interfaces/quizzes.interface';
import QuizResultsToChooseCorrectAnswer from '../QuizResultsToChooseCorrectAnswer';
import QuizResultsTranslateSentences from '../QuizResultsTranslateSentences';
import {
  IconWrapper,
  ContentWrapper,
  QuizList,
  QuizItem,
  QuizName,
  Score,
} from './ListCompletedQuizzes.styles';

interface IProps {
  quizzes: ICompletedQuiz[] | undefined;
  quizType: string;
  Icon: JSX.Element;
}

interface IQuizResult {
  quizId: string;
  quizName: string;
  answers: string[];
  score?: number | null;
}

const ListCompletedQuizzes = ({ quizzes = [], quizType, Icon }: IProps) => {
  const [
    isShowQuizResultToChooseCorrectAnswer,
    toggleIsShowQuizResultToChooseCorrectAnswer,
  ] = useToggle(false);
  const [
    isShowQuizResultsTranslateSentences,
    toggleIsShowQuizResultsTranslateSentences,
  ] = useToggle(false);

  const [{ quizId, quizName, score, answers }, setQuizResult] =
    useState<IQuizResult>({
      quizId: '',
      quizName: '',
      answers: [],
      score: null,
    });

  return (
    <>
      <Modal
        isShowing={isShowQuizResultToChooseCorrectAnswer}
        hide={toggleIsShowQuizResultToChooseCorrectAnswer}
      >
        <h1>Квіз вибрати відповідь</h1>
        <QuizResultsToChooseCorrectAnswer
          quizId={quizId}
          quizName={quizName}
          answers={answers}
          score={score}
        />
      </Modal>

      <Modal
        isShowing={isShowQuizResultsTranslateSentences}
        hide={toggleIsShowQuizResultsTranslateSentences}
      >
        <h1>Квіз перекладу речення</h1>
        <QuizResultsTranslateSentences
          quizId={quizId}
          quizName={quizName}
          answers={answers}
        />
      </Modal>

      {quizzes?.length > 0 ? (
        <QuizList>
          {quizzes
            ?.filter(quiz => quiz.quizType === quizType)
            .map(({ quizName, quizId, score, answers }) => {
              return (
                <QuizItem key={quizId}>
                  <IconWrapper>{Icon}</IconWrapper>
                  <ContentWrapper>
                    <QuizName>{quizName}</QuizName>
                    {score !== null && (
                      <Score>
                        Оцінка: <span>{score}</span>
                      </Score>
                    )}

                    {quizType === 'chooseTheCorrectAnswer' && (
                      <Button
                        type="button"
                        onClick={() => {
                          toggleIsShowQuizResultToChooseCorrectAnswer();
                          setQuizResult({ quizId, quizName, answers, score });
                        }}
                      >
                        Результат
                      </Button>
                    )}

                    {quizType === 'translate-sentences' && (
                      <Button
                        type="button"
                        onClick={() => {
                          toggleIsShowQuizResultsTranslateSentences();
                          setQuizResult({ quizId, quizName, answers });
                        }}
                      >
                        Результат
                      </Button>
                    )}
                  </ContentWrapper>
                </QuizItem>
              );
            })}
        </QuizList>
      ) : (
        <h2>Пусто</h2>
      )}
    </>
  );
};

export default ListCompletedQuizzes;
