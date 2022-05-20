export type TQuiz = {
  _id: string;
  name: string;
  quizType: string;
  questions: [];
};

export interface IQuizzes {
  quizzes: TQuiz[];
}

export interface ISaveResultQuiz {
  userId: string;
  quizId: string;
  quizName: string;
  quizType: string;
  score: number | null;
  answers: string[];
}

export interface ICompletedQuiz {
  quizId: string;
  quizName: string;
  quizType: string;
  score: number | null;
  answers: string[];
}
