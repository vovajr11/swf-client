import { Box } from '@mui/system';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, FieldArray } from 'formik';
import { IForm, TWord, IQuestion } from '@interfaces/quizPuzzle.interface';
import Input from '@components/Input';
import Button from '@components/Button';
import ModuleSelect from '@components/ModuleSelect';
import { createQuiz } from '@api/quizzes/puzzle';
import { useInput } from '@hooks/useInput';
import { Answers } from './PuzzleForm.styles';
import QuestionList from './QuestionList';

const Form = () => {
  const initialValues: IForm = {
    quizName: '',
    question: '',
    correctAnswer: '',
    word: '',
  };

  const [words, setWords] = useState<TWord[]>([]);
  const [questions, setQuestions] = useState<IQuestion[]>([]);
  const [moduleId, setModuleId] = useState('');
  const inputQuestion = useInput('', { isEmpty: true, minLength: 3 });
  const inputCorrectAnswer = useInput('', { isEmpty: true, minLength: 3 });

  return (
    <>
      <h2>Вікторина "Пазли"</h2>
      <Formik
        initialValues={initialValues}
        onSubmit={({ quizName }) => {
          createQuiz({
            moduleId,
            name: quizName,
            quizType: 'puzzle',
            questions,
          });
        }}
      >
        {({ values, handleSubmit, handleChange, resetForm }) => (
          <form onSubmit={handleSubmit}>
            <FieldArray name="questions">
              {({ remove }) => (
                <Box
                  sx={{ display: 'flex', gap: '50px', marginBottom: '50px' }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '50%',
                    }}
                  >
                    <Box
                      sx={{
                        marginBottom: '20px',
                        display: 'flex',
                        gap: '10px',
                        alignItems: 'center',
                      }}
                    >
                      <Input
                        type="text"
                        name="quizName"
                        placeholder="Назва тесу"
                        value={values.quizName}
                        onChange={handleChange}
                      />

                      <ModuleSelect setModuleId={setModuleId} />
                    </Box>

                    <Input
                      type="text"
                      name="question"
                      placeholder="Питання"
                      value={values.question}
                      onChange={e => {
                        handleChange(e);
                        inputQuestion.onChange(e);
                      }}
                    />

                    <Input
                      type="text"
                      name="correctAnswer"
                      placeholder="Правильна відповідь"
                      value={values.correctAnswer}
                      onChange={e => {
                        handleChange(e);
                        inputCorrectAnswer.onChange(e);
                      }}
                    />

                    <Answers>
                      {words.length > 1 ? (
                        <ul>
                          {words.slice(1).map(word => (
                            <li key={uuidv4()}>
                              <p>{word}</p>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <p>Додай слова</p>
                      )}
                    </Answers>

                    <Box
                      sx={{
                        display: 'flex',
                        gap: '10px',
                        marginBottom: '30px',
                      }}
                    >
                      <Button
                        type="button"
                        size="sm"
                        onClick={() =>
                          setWords(prevState => {
                            return [
                              ...prevState,
                              {
                                id: uuidv4(),
                                word: values.word,
                              },
                            ];
                          })
                        }
                      >
                        Додати слово
                      </Button>

                      <Input
                        type="text"
                        name="answer"
                        placeholder="Слово"
                        value={values.word}
                        onChange={handleChange}
                      />
                    </Box>

                    <Button
                      type="button"
                      size="sm"
                      disabled={
                        inputQuestion.minLengthError ||
                        inputCorrectAnswer.minLengthError ||
                        words.length === 1
                      }
                      onClick={() => {
                        setQuestions(prevState => {
                          return [
                            ...prevState,
                            {
                              id: uuidv4(),
                              question: values.question,
                              correctAnswer: values.correctAnswer,
                              words: words.slice(1),
                            },
                          ];
                        });
                        setWords([]);
                        resetForm();
                      }}
                    >
                      Додати питання
                    </Button>
                  </Box>
                  {questions.length > 0 && (
                    <QuestionList
                      questions={questions}
                      updateData={setQuestions}
                    />
                  )}
                </Box>
              )}
            </FieldArray>

            <Box sx={{ textAlign: 'center' }}>
              <Button type="submit" variant="contained" size="lg">
                Створити квіз
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Form;
