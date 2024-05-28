'use client';
import React, { useEffect, useState } from 'react';
import { useInterviewContext } from '../../../contexts/interview-context';
import InterviewPrompt from '../components/InterviewPrompt';
import Timer from '../components/timer';
import QuestionBars from '../components/questionBars';
import MainInterview from '../components/mainInterview';
import axios from 'axios';
import { useRouter } from 'next/navigation';

const Interview = () => {
  const { interview } = useInterviewContext();
  const router = useRouter();

  if (!interview) {
    return <div>Error with getting interview</div>;
  }

  const [prompt, setPrompt] = useState(true);
 
  // States for Question  
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [started, setStarted] = useState<boolean>(false);

  // States for timer
  const [time, setTime] = useState<number>(30); 
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);

  // States for evaluation and audio
  const [blobs, setBlobs] = useState<any[]>([]);
  const [evaluations, setEvaluations] = useState<any[]>([]);

  useEffect(() => {
    const saveToMongo = async () => {
      const data = {
        evaluations: evaluations,
        position: interview.profession,
      };
      const resp = await axios.post(
        'http://localhost:4000/mongo/save-interview',
        data,
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        },
      );
      console.log('Success', evaluations, resp);
    //   router.push('/start/feedback');
    };
    if (evaluations.length == interview.questionCount) saveToMongo();
  }, [evaluations]);

  // TODO: Need to discuss ways to handle sending request -> redirect to new page -> receiving info
  const evaluate = async () => {
    const formData = new FormData();

    let currIdx = blobs.length - 1;
    formData.append('question', interview.questions[currIdx] as string);
    formData.append('profession', interview.profession as string);
    formData.append('audio', blobs[currIdx]);
    const resp = await axios.post(
      'http://localhost:4000/gpt/evaluate',
      formData,
      {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      },
    );
    setEvaluations((prevEvals) => [...prevEvals, resp.data]);
  };

   // when blobs gets updated, evalaute new blob
   useEffect(() => {
    if (blobs.length > 0) evaluate();
  }, [blobs]);

  const startResponse = () => {
    setStarted(true);
    timer('start');
  };

  const nextQuestion = () => {
    setTime(30);
    timer('end');
    setStarted(false);
    if (questionIndex < interview?.questionCount - 1)
      setQuestionIndex(questionIndex + 1);
  };

  const timer = (action: string) => {
    if (action === 'start') {
      const intId = setInterval(() => {
        if (time > 0) {
          setTime((prevTime) => prevTime - 1);
        } else {
          clearInterval(intId);
        }
      }, 1000);
      setIntervalID(intId);
    } else if (action === 'end') {
      if (intervalID !== null) {
        clearInterval(intervalID);
      }
    }
  };

  if (prompt === true) {
    return (
      <div className="w-full h-full flex justify-center items-center">
        <InterviewPrompt setPrompt={setPrompt} />
      </div>
    );
  }

  return (
    <div className="flex flex-col w-full h-full">
      <div className="grid grid-rows-1 grid-cols-12 p-4 pb-0 h-14 items-center">
        <div className="flex items-center justify-start row-span-1 col-span-2">
          <p className="font-redHatText text-base font-medium text-accent">
            <span className="text-secondary">{interview?.profession}</span>{' '}
            Interview
          </p>
        </div>
        <div className="row-span-1 col-span-1"></div>
        <QuestionBars interview={interview} questionIndex={questionIndex} />
        <div className="row-span-1 col-span-1"></div>
        <Timer time={time} />
      </div>
      <div className="h-[calc(100vh-3.5rem)] w-full p-4 pb-0 overflow-hidden">
        <MainInterview
          started={started}
          setBlobs={setBlobs}
          interview={interview}
          questionIndex={questionIndex}
          startResponse={startResponse}
          nextQuestion={nextQuestion}
        />
      </div>
    </div>
  );
};

export default Interview;
