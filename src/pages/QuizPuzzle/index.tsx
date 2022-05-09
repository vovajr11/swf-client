import React, { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import Button from '@components/Button';
import WordCard from './components/WordCard';
import UserAnswers from './components/UserAnswers';
import useNextCard from './logic/useNextCard';
import onDragEnd from './logic/onDragEnd';
import {
  Background,
  WordList,
  WordColumnStyles,
  Title,
  Question,
  BtnContainer,
} from './QuizPuzzle.styles';

type TWord = {
  id: string;
  word: string;
};

export const QuizPuzzle = () => {
  const { columnsFromBackend, onNextCard, questionNumber } = useNextCard();
  const [columns, setColumns] = useState(columnsFromBackend);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  const [showQuiz, setShowQuiz] = useState(false);
  const [userAnswers, setUserAnswers] = useState(['']);

  const totalQuestion = columnsFromBackend.answers.totalQuestion - 1;
  const isActiveBtnNext =
    columns.answers.numberOfWords === columns.userAnswers.items.length;

  useEffect(() => {
    setColumns(columnsFromBackend);
    setGameOver(false);
  }, [questionNumber]);

  const nexQuestion = () => {
    const { answers, userAnswers } = columns;
    const userAnswer = createStringFromArr(userAnswers.items);

    setUserAnswers(prevState => {
      return [...prevState, userAnswer];
    });

    if (answers.correctAnswer === userAnswer) {
      setScore(prevState => prevState + 1);
    }

    if (totalQuestion === questionNumber) {
      setGameOver(true);
      setShowQuiz(true);
    } else {
      onNextCard(questionNumber + 1);
    }
  };

  const createStringFromArr = (arr: TWord[]) => {
    return arr.map(item => item.word).join(' ');
  };

  return (
    <>
      {!gameOver && (
        <>
          <DragDropContext
            onDragEnd={result => onDragEnd(result, columns, setColumns)}
          >
            <Question>{columns.answers.question}</Question>

            <WordColumnStyles>
              {Object.entries(columns).map(([columnId, column]) => {
                return (
                  <Droppable
                    direction="horizontal"
                    droppableId={columnId}
                    key={columnId}
                  >
                    {(provided, snapshot) => (
                      <Background
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                      >
                        <Title>{column.title}</Title>

                        <WordList>
                          {column.items.map((item, index) => (
                            <WordCard
                              key={uuidv4()}
                              item={item}
                              index={index}
                            />
                          ))}
                        </WordList>
                      </Background>
                    )}
                  </Droppable>
                );
              })}
            </WordColumnStyles>
          </DragDropContext>

          <BtnContainer>
            <Button
              type="button"
              size="lg"
              disabled={!isActiveBtnNext}
              onClick={nexQuestion}
            >
              {totalQuestion === questionNumber ? 'Завершити' : 'Далі'}
            </Button>
          </BtnContainer>
        </>
      )}

      {showQuiz && (
        <UserAnswers userAnswers={userAnswers.slice(1)} score={score} />
      )}
    </>
  );
};
