export type TWord = {
  id: string;
  word: string;
};

export interface IQuestion {
  id: string;
  question: string;
  correctAnswer: string;
}

export interface ICreateQuiz {
  moduleId: string;
  name: string;
  quizType: string;
  questions: IQuestion[];
}

export interface IForm {
  quizName: string;
  question: string;
  correctAnswer: string;
}
