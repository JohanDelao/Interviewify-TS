export interface User {
  email: string;
  username: string;
  _v: number;
  _id: string;
}

export interface Feedback {
  answer: string;
  created_at: string;
  explanation: string;
  feedback: string;
  interview_id: string;
  question: string;
  score: number;
  __v: number;
  _id: string;
}

export enum ProfessionType {
  ALL = 'all',
  SOFTWARE_ENGINEER = 'Software Engineer',
  DATA_SCIENTIST = 'Data Scientist',
  PRODUCT_MANAGER = 'Product Manager',
}

export type Profession = ProfessionType;
