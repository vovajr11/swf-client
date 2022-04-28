import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from 'react-redux';
import { Formik, ErrorMessage, FieldArray } from 'formik';
import Input from '@components/Input';
import Button from '@components/Button';
import { Box } from '@mui/system';
import { Answers } from './Styles';

type TData = {
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

  const dispatch = useDispatch();

  const [answers, setAnswers] = useState(['']);
  const [data, setData] = useState<TData[]>([]);

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ quizName }) => {
        console.log(
          {
            name: quizName,
            data,
          },
          'values',
        );
        // dispatch(createCourse(values));
      }}
      // validationSchema={validation}
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
                  <Box sx={{ marginBottom: '20px' }}>
                    <Input
                      type="text"
                      name="quizName"
                      placeholder="Назва тесу"
                      value={values.quizName}
                      onChange={handleChange}
                    />
                    <ErrorMessage name="quizName" />
                  </Box>

                  <Input
                    type="text"
                    name="question"
                    placeholder="Питання"
                    value={values.question}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="question" />

                  <Input
                    type="text"
                    name="correctAnswer"
                    placeholder="Правильна відповідь"
                    value={values.correctAnswer}
                    onChange={handleChange}
                  />
                  <ErrorMessage name="correctAnswer" />

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
                    sx={{ display: 'flex', gap: '10px', marginBottom: '50px' }}
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
                    onClick={() => {
                      setData(prevState => {
                        return [
                          ...prevState,
                          {
                            question: values.question,
                            correctAnswer: values.correctAnswer,
                            answers: answers.slice(1),
                          },
                        ];
                      });
                      resetForm();
                    }}
                  >
                    Додати питання
                  </Button>
                </Box>
                <ul>
                  {data.map(({ question, correctAnswer, answers }) => {
                    return (
                      <li key={uuidv4()}>
                        <p>Питання: {question}</p>
                        <p>Вірна відповідь: {correctAnswer}</p>

                        <ul>
                          {answers.map(answer => (
                            <li key={uuidv4()}>{answer}</li>
                          ))}
                        </ul>
                      </li>
                    );
                  })}
                </ul>
              </Box>
            )}
          </FieldArray>

          <Box sx={{ textAlign: 'center' }}>
            <Button type="submit" variant="contained" size="md">
              Створити квіз
            </Button>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default Form;
