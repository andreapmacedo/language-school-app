export interface IAnswer {
  id?: string;
  answer: string;
  correct: boolean;
}

export interface IQuestionQuery {
  id?: string;
  category: string;
  difficulty: string;
  type: string;
  level: string;
  // correct_answer: string;
  question: string;
  explanations: string[];
  answers: IAnswer[];
  // themes: string[];
  tags: string[];
}

export interface ITagQuery {
  id?: string;
  tag: string;
}

export interface IThemeQuery {
  id?: string;
  theme: string;
}