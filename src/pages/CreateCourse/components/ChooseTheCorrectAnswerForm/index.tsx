import { Box } from '@mui/system';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, FieldArray } from 'formik';
import Input from '@components/Input';
import Button from '@components/Button';
import ModuleSelect from '@components/ModuleSelect';
import { createQuiz } from '@api/quizzes/chooseTheCorrectAnswer';
import { useInput } from '@hooks/useInput';
import { Answers } from './ChooseTheCorrectAnswerForm.styles';
import QuestionList from './QuestionList';

type TData = {
  id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
};

interface IForm {
  quizName: string;
  question: string;
  correctAnswer: string;
  answer: string;
}

const Form = () => {
  const initialValues: IForm = {
    quizName: '',
    question: '',
    correctAnswer: '',
    answer: '',
  };

  const [answers, setAnswers] = useState(['']);
  const [data, setData] = useState<TData[]>([]);
  const [moduleId, setModuleId] = useState('');
  // const [dataForDrag, updateDataForDrag] = useState(data);

  const question = useInput('', { isEmpty: true, minLength: 3 });
  const correctAnswer = useInput('', { isEmpty: true, minLength: 3 });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ quizName }) => {
        createQuiz({
          moduleId,
          name: quizName,
          quizType: 'chooseTheCorrectAnswer',
          data,
        });
      }}
    >
      {({ values, handleSubmit, handleChange, resetForm }) => (
        <form onSubmit={handleSubmit}>
          <FieldArray name="data">
            {({ remove }) => (
              <Box sx={{ display: 'flex', gap: '50px', marginBottom: '50px' }}>
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
                      question.onChange(e);
                    }}
                  />

                  <Input
                    type="text"
                    name="correctAnswer"
                    placeholder="Правильна відповідь"
                    value={values.correctAnswer}
                    onChange={e => {
                      handleChange(e);
                      correctAnswer.onChange(e);
                    }}
                  />

                  <Answers>
                    {answers.length > 1 ? (
                      <ul>
                        {answers.slice(1).map(answer => (
                          <li key={uuidv4()}>
                            <p>{answer}</p>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <p>Додай відповіді</p>
                    )}
                  </Answers>

                  <Box
                    sx={{ display: 'flex', gap: '10px', marginBottom: '30px' }}
                  >
                    <Button
                      type="button"
                      size="sm"
                      onClick={() =>
                        setAnswers(prevState => {
                          return [...prevState, values.answer];
                        })
                      }
                    >
                      Додати відповідь
                    </Button>

                    <Input
                      type="text"
                      name="answer"
                      placeholder="Відповідь"
                      value={values.answer}
                      onChange={handleChange}
                    />
                  </Box>

                  <Button
                    type="button"
                    size="sm"
                    disabled={
                      question.minLengthError ||
                      correctAnswer.minLengthError ||
                      answers.length === 1
                    }
                    onClick={() => {
                      setData(prevState => {
                        return [
                          ...prevState,
                          {
                            id: uuidv4(),
                            question: values.question,
                            correctAnswer: values.correctAnswer,
                            answers: answers.slice(1),
                          },
                        ];
                      });
                      setAnswers(['']);
                      resetForm();
                    }}
                  >
                    Додати питання
                  </Button>
                </Box>
                {data.length > 0 && (
                  <QuestionList questions={data} updateData={setData} />
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
  );
};

export default Form;
