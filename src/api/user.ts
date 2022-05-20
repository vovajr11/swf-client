import axios from 'axios';
import { ISaveResultQuiz, ICompletedQuiz } from '@interfaces/quizzes.interface';

interface IGetCompletedQuizzes {
  completedQuizzes: ICompletedQuiz[];
}

export const saveTheResultOfTheQuiz = async (data: ISaveResultQuiz) => {
  try {
    await axios.put(`/users/save-result-quiz`, data);
  } catch (error) {
    console.log('Error');
  }
};

export const getTheResultOfTheQuizzes = async (id: string) => {
  try {
    const { data } = await axios.get<IGetCompletedQuizzes>(
      `/users/get-result-quizzes/${id}`,
    );

    return data.completedQuizzes;
  } catch (error) {
    console.log('Error');
  }
};
