import React, { useState } from 'react';
import { DownOutlined, UpOutlined } from '@ant-design/icons';
import { Interview } from '../../../interfaces';
import InterviewQuestion from '../components/interviewQuestion';
import clsx from 'clsx';

type MainInterviewProps = {
  started: boolean;
  setBlobs: React.Dispatch<React.SetStateAction<any[]>>;
  interview: Interview | null;
  questionIndex: number;
  startResponse: () => void;
  nextQuestion: () => void;
};

const MainInterview = ({
  started,
  setBlobs,
  interview,
  questionIndex,
  startResponse,
  nextQuestion
}: MainInterviewProps) => {

  if (!interview) {
    return <div>Error with getting interview</div>;
  }

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="h-full w-full flex justify-center items-center overflow-hidden">
        <div
          className="h-full w-full transition-transform"
          style={{ transform: `translateY(-${100 * questionIndex}%)` }}
        >
          {interview?.questions.map((question) => {
            // Make a interview component for each interview, give a set blob function through it so you can keep code clean
            const current = question === interview.questions[questionIndex];
            return (
              <InterviewQuestion
                current={current}
                question={question}
                setBlobs={setBlobs}
                started={started}
                startResponse={startResponse}
                nextQuestion={nextQuestion}
              />
            );
          })}
        </div>
        {/* TO DO: Move to feedback page */}
        {/* <div className="row-span-1 col-span-2 flex items-center justify-center">
                    <div className="flex flex-col h-20 w-10 rounded-lg border-2 border-accent/10">
                        <button className="h-3/6 w-full flex items-center justify-center" disabled={questionIndex === 0 ? true : false} onClick={(e) => {
                            e.preventDefault();
                            setQuestionIndex(questionIndex - 1)
                        }}><UpOutlined className={clsx("text-xs", questionIndex === 0 ? "text-accent/20" : "text-accent")} /></button>
                        <hr className="w-full h-0.5 bg-accent/10"></hr>
                        <button className="h-3/6 w-full flex items-center justify-center" disabled={questionIndex === interview.questions.length - 1 ? true : false} onClick={(e) => {
                            e.preventDefault();
                            setQuestionIndex(questionIndex + 1)
                        }}><DownOutlined className={clsx("text-xs", questionIndex === interview.questions.length - 1 ? "text-accent/20" : "text-accent")} /></button>
                    </div>
                </div> */}
      </div>
    </div>
  );
};

export default MainInterview;
