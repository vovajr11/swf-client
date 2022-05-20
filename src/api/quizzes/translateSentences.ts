import axios from 'axios';
import notificationTypes from '@components/Notification/notificationTypes';
import { IQuestion } from '@interfaces/quizTranslateSentences.interface';

interface ICreateQuiz {
  moduleId: string;
  name: string;
  quizType: string;
  questions: IQuestion[];
}

interface IGetQuiz {
  questions: IQuestion[];
}

export const getQuizById = async (id: string | undefined) => {
  try {
    const { data } = await axios.get<IGetQuiz>(
      `/quizzes/get-quiz-translate-sentences-by-id/${id}`,
    );

    return data.questions;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};

export const createQuiz = async ({
  questions,
  name,
  moduleId,
  quizType,
}: ICreateQuiz) => {
  try {
    const questionsForBackend = questions.map(
      ({ _id, ...keepAttrs }) => keepAttrs,
    );

    const dataForBackend = {
      moduleId,
      name,
      quizType,
      questions: questionsForBackend,
    };

    await axios.post('/quizzes/add-quiz-translate-sentences', dataForBackend);
    notificationTypes.notificationSuccess('Квіз додано!');
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};
