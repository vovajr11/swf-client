import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import WordCard from './components/WordCard';
import {
  Background,
  WordList,
  WordColumnStyles,
  Title,
} from './QuizPuzzle.styles';
import useNextCard from './components/NextCard';

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

  console.log(columns, 'columns');

  useEffect(() => {
    setColumns(columnsFromBackend);
    setGameOver(false);
  }, [questionNumber]);

  const onDragEnd = (result: any, columns: any, setColumns: any) => {
    if (!result.destination) return;

    const { source, destination } = result;

    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];

      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];
      const [removed] = sourceItems.splice(source.index, 1);

      destItems.splice(destination.index, 0, removed);

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  };

  const totalQuestion = 1;

  const nexQuestion = () => {
    const { answers, userAnswers } = columns;

    const userAnswer = createStringFromArr(userAnswers.items);

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
            <WordColumnStyles>
              {Object.entries(columns).map(([columnId, column], index) => {
                return (
                  <Droppable
                    direction="horizontal"
                    key={columnId}
                    droppableId={columnId}
                  >
                    {(provided, snapshot) => (
                      <Background
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                      >
                        <Title>{column.title}</Title>

                        <WordList>
                          {column.items.length > 0 ? (
                            <>
                              {column.items.map((item, index) => (
                                <WordCard
                                  key={item.id}
                                  item={item}
                                  index={index}
                                />
                              ))}
                            </>
                          ) : (
                            <p>Перетягніть слова</p>
                          )}
                        </WordList>
                      </Background>
                    )}
                  </Droppable>
                );
              })}
            </WordColumnStyles>
          </DragDropContext>

          <button onClick={nexQuestion}>
            {totalQuestion === questionNumber ? 'Finish' : 'Next'}
          </button>
        </>
      )}
      {showQuiz && <h2>Ти набрав: {score} балів</h2>}
    </>
  );
};
