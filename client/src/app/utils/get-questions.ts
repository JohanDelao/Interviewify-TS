import { ProfessionType } from '../interfaces';
import { questionBank } from './questionBank';

export default function GetQuestions(
  profession: ProfessionType | undefined,
  numberQs: number | undefined,
): string[] {
  const res: string[] = [];
  if (profession && numberQs) {
    while (res.length < numberQs) {
      let randomIndex = Math.floor(Math.random() * questionBank.length);
      let question = questionBank[randomIndex][0];
      let questionProfession = questionBank[randomIndex][1];

      if (
        (questionProfession === profession || questionProfession === ProfessionType.ALL) &&
        !res.includes(question)
      ) {
        res.push(question);
      }
    }
  }
  return res;
}