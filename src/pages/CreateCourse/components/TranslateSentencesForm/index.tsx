import { Box } from '@mui/system';
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { Formik, FieldArray } from 'formik';
import Input from '@components/Input';
import Button from '@components/Button';
import ModuleSelect from '@components/ModuleSelect';
import { IQuestion } from '@interfaces/quizTranslateSentences.interface';
import { createQuiz } from '@api/quizzes/translateSentences';
import { useInput } from '@hooks/useInput';
// import { Answers } from './ChooseTheCorrectAnswerForm.styles';
import QuestionList from './QuestionList';

interface IForm {
  quizName: string;
  sentenceToBeTranslated: string;
  translatedSentence: string;
}

const Form = () => {
  const initialValues: IForm = {
    quizName: '',
    sentenceToBeTranslated: '',
    translatedSentence: '',
  };

  const [data, setData] = useState<IQuestion[]>([]);
  const [moduleId, setModuleId] = useState('');

  const inputSentenceToBeTranslated = useInput('', {
    isEmpty: true,
    minLength: 3,
  });
  const inputTranslatedSentence = useInput('', { isEmpty: true, minLength: 3 });

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={({ quizName }) => {
        createQuiz({
          moduleId,
          name: quizName,
          quizType: 'translate-sentences',
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

                  <Box sx={{ marginBottom: '20px' }}>
                    <Input
                      type="text"
                      name="sentenceToBeTranslated"
                      placeholder="sentenceToBeTranslated"
                      value={values.sentenceToBeTranslated}
                      onChange={e => {
                        handleChange(e);
                        inputSentenceToBeTranslated.onChange(e);
                      }}
                    />

                    <Input
                      type="text"
                      name="translatedSentence"
                      placeholder="translatedSentence"
                      value={values.translatedSentence}
                      onChange={e => {
                        handleChange(e);
                        inputTranslatedSentence.onChange(e);
                      }}
                    />
                  </Box>

                  <Button
                    type="button"
                    size="sm"
                    disabled={
                      inputSentenceToBeTranslated.minLengthError ||
                      inputTranslatedSentence.minLengthError
                    }
                    onClick={() => {
                      setData(prevState => {
                        return [
                          ...prevState,
                          {
                            id: uuidv4(),
                            sentenceToBeTranslated:
                              values.sentenceToBeTranslated,
                            translatedSentence: values.translatedSentence,
                          },
                        ];
                      });

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
