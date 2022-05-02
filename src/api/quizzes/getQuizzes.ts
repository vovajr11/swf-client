import axios from 'axios';
import notificationTypes from '@components/Notification/notificationTypes';
import {
  IQuizzes,
  TQuiz,
} from '@interfaces/quizToChooseTheCorrectAnswer.interface';

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

export const getQuizById = async (id: string | undefined) => {
  try {
    const { data } = await axios.get<TQuiz>(`/quizzes/get-quiz-by-id/${id}`);

    return data;
  } catch (error: any) {
    notificationTypes.notificationWarn(error.response.data.message);
  }
};
