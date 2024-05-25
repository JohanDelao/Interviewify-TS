export interface User {
  email: string;
  username: string;
  _v: number;
  _id: string;
}

export interface Interview {
  questionCount: number;
  profession: ProfessionType;
  questions: string[];
}

export enum ProfessionType {
  ALL = 'all',
  SOFTWARE_ENGINEER = 'Software Engineer',
  DATA_SCIENTIST = 'Data Scientist',
  PRODUCT_MANAGER = 'Product Manager',
}

export type Profession = ProfessionType;
