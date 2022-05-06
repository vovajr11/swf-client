import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { Word, TaskInformation } from './WordCard.styles';

interface IProps {
  item: any;
  index: any;
}

const WordCard = ({ item, index }: IProps) => {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {provided => (
        <Word
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <TaskInformation>
            <p>{item.word}</p>
          </TaskInformation>
        </Word>
      )}
    </Draggable>
  );
};

export default WordCard;
