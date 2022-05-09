import axios from 'axios';
import notificationTypes from '@components/Notification/notificationTypes';
import { ICreateQuiz } from '@interfaces/quizPuzzle.interface';

export const createQuiz = async (data: ICreateQuiz) => {
  try {

    console.log(data, 'data');
    
    // await axios.post('/quizzes/add-quiz-choose-the-correct-answer', data);
    notificationTypes.notificationSuccess('Квіз додано!');
    // const { data } = await axios.get(`/chapters/${id}`);
    // return data;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};
