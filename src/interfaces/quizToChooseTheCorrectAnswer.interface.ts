export type TQuestion = {
  _id: string;
  question: string;
  correctAnswer: string;
  answers: string[];
};

export type TQuiz = {
  _id: string;
  name: string;
  quizType: string;
  data: TQuestion[];
};

export interface IQuizzes {
  quizzes: TQuiz[];
}
