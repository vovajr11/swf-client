import axios from 'axios';
import notificationTypes from '@components/Notification/notificationTypes';
import { IQuizzes } from '@interfaces/quizzes.interface';

export const getQuizzes = async () => {
  try {
    const { data } = await axios.get<IQuizzes>('/quizzes/get-quizzes');

    return data.quizzes;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};

export const getQuizzesByModuleId = async (id: string | undefined) => {
  try {
    const { data } = await axios.get<IQuizzes>(
      `/quizzes/get-quizzes-by-module-id/${id}`,
    );

    return data.quizzes;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};
