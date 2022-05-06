import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Test } from './QuestionList.styles';

type TData = {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
};

interface IProps {
  questions: TData[];
  updateData: any;
}

const QuestionList = ({ questions, updateData }: IProps) => {
  const handleOnDragEnd = (result: any) => {
    if (!result.destination) return;

    const items = Array.from(questions);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    updateData(items);
  };

  return (
    <Test>
      <DragDropContext onDragEnd={handleOnDragEnd}>
        <Droppable droppableId="data">
          {provided => (
            <ul
              className="characters"
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {questions.map(
                ({ question, correctAnswer, answers, id }, index) => {
                  return (
                    <Draggable key={id} draggableId={id} index={index}>
                      {provided => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                        >
                          <p>Питання: {question}</p>
                          <p>Вірна відповідь: {correctAnswer}</p>

                          <ul>
                            {answers.map(answer => (
                              <li key={uuidv4()}>{answer}</li>
                            ))}
                          </ul>
                        </li>
                      )}
                    </Draggable>
                  );
                },
              )}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
    </Test>
  );
};

export default QuestionList;
