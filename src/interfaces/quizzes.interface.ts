export type TQuiz = {
  _id: string;
  name: string;
  quizType: string;
  data: [];
};

export interface IQuizzes {
  quizzes: TQuiz[];
}
