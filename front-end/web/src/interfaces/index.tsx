export interface IAnswer {
  answer: string;
  correct: boolean;
}

export interface IQuestionQuery {
  category: string;
  difficulty: string;
  type: string;
  level: string;
  correct_answer: string;
  question: string;
  explanations: string[];
  answers: IAnswer[];
  themes: string[];
  tags: string[];
}