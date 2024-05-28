import React from 'react';
import { Interview } from '@/app/interfaces';
import clsx from 'clsx';

type QuestionBarsProps = {
    interview: Interview | null,
    questionIndex: number
}

const QuestionBars = ( { interview, questionIndex } : QuestionBarsProps ) => {
  return (
    <div className="flex items-center justify-center row-span-1 col-span-7">
      <div
        className={`w-full h-full flex items-center justify-center gap-3`}
      >
        {interview?.questions.map((question) => {
          return (
            <div className="w-44">
              <div className={clsx("w-full h-[6px] rounded-full", interview.questions[questionIndex] == question ? "bg-accent" : "bg-accent/10")}></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default QuestionBars;
