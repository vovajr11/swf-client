import axios from 'axios';
import notificationTypes from '@components/Notification/notificationTypes';

type TData = {
  question: string;
  correctAnswer: string;
  answers: string[];
};

interface ICreateQuiz {
  moduleId: string;
  name: string;
  quizType: string;
  data: TData[];
}

export const createQuiz = async (data: ICreateQuiz) => {
  try {
    await axios.post('/quizzes/add-quiz-choose-the-correct-answer', data);
    notificationTypes.notificationSuccess('Квіз додано!');
    // const { data } = await axios.get(`/chapters/${id}`);
    // return data;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};
