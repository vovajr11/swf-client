import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { IQuestion } from '@interfaces/quizTranslateSentences.interface';
// import { Test } from './QuestionList.styles';

interface IProps {
  questions: IQuestion[];
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
    // <Test>
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="data">
        {provided => (
          <ul
            className="characters"
            {...provided.droppableProps}
            ref={provided.innerRef}
          >
            {questions.map(
              ({ id, translatedSentence, sentenceToBeTranslated }, index) => {
                return (
                  <Draggable key={id} draggableId={id} index={index}>
                    {provided => (
                      <li
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        <p>Питання: {sentenceToBeTranslated}</p>
                        <p>Вірна відповідь: {translatedSentence}</p>
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
    // </Test>
  );
};

export default QuestionList;
