'use client';
import React, { useEffect, useState } from 'react';
import GetQuestions from '../../utils/get-questions';
import { useRouter, useSearchParams } from 'next/navigation';
import getProfessionType from '../../utils/get-profession-type';
import Card from 'antd/es/card/Card';
import { AudioOutlined, AudioMutedOutlined } from '@ant-design/icons';
import { Button, Progress, Modal } from 'antd';
import { ReactMic } from 'react-mic';
import LoadingSubmission from '../../components/loadingSubmission';
import axios from 'axios';

export default function Interview() {
  const params = useSearchParams();
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const profession = getProfessionType(params.get('profession'));
  const numQs = parseInt(
    params.get('numberQs') ? String(params.get('numberQs')) : '0',
  );

  // Code to keep track of question location
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [questions, setQuestions] = useState<string[]>([]);
  const nextQuestion = () => {
    setTime(30);
    timer('end');
    setStarted(false);
    if (questionIndex < questions.length - 1)
      setQuestionIndex(questionIndex + 1);
  };

  const [blobs, setBlobs] = useState<any[]>([]);
  function handleAudio(recordedBlob: any) {
    setBlobs((prevBlobs) => [...prevBlobs, recordedBlob.blob]);
  }

  const [evaluations, setEvaluations] = useState<any[]>([]);
  useEffect(() => {
    const saveToMongo = async () => {
      const data = {
        evaluations: evaluations,
        position: profession,
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
      router.push('/start/feedback');
    };
    if (evaluations.length == numQs) saveToMongo();
  }, [evaluations]);

  // TODO: Need to discuss ways to handle sending request -> redirect to new page -> receiving info
  const evaluate = async () => {
    const formData = new FormData();

    let currIdx = blobs.length - 1;

    // means this is the last question, for good UI we want to execute the loading to hide the delay of this response evaluation and saving to mongodb
    if(blobs.length === numQs){
      setLoading(true);
    }

    formData.append('question', questions[currIdx] as string);
    formData.append('profession', profession as string);
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

  const restartQuestion = () => {
    setTime(30);
    setStarted(false);
    timer('end');
  };

  // Code for Timer
  const [started, setStarted] = useState<boolean>(false);
  const [time, setTime] = useState<number>(30);
  const [intervalID, setIntervalID] = useState<NodeJS.Timeout | null>(null);
  const startResponse = () => {
    setStarted(true);
    timer('start');
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
  const timeConvert = (time: number) => {
    if (time < 0) {
      return '00';
    }
    if (time < 10) {
      return '0' + String(time);
    } else {
      return String(time);
    }
  };

  const [muted, setMuted] = useState<boolean>(false);

  useEffect(() => {
    const questions = GetQuestions(profession ? profession : undefined, numQs);
    setQuestions(questions);
    setStarted(false);
    setTime(30);
  }, []);

  // when blobs gets updated, evalaute new blob
  useEffect(() => {
    if (blobs.length > 0) evaluate();
  }, [blobs]);

  const CardTitleUI = () => {
    return (
      <div className="flex justify-between">
        <div className="flex justify-center items-center">
          <p className="w-fit h-fit">
            Question {questionIndex + 1} of {numQs}
          </p>
        </div>
        <div className="flex flex-row-reverse justify-between items-center gap-5">
          {!muted ? (
            <AudioOutlined
              className="text-lg font-bold text-[#1677ff]"
              onClick={() => setMuted(!muted)}
            />
          ) : (
            <AudioMutedOutlined
              className="text-lg font-bold text-[#1677ff]"
              onClick={() => setMuted(!muted)}
            />
          )}
          <ReactMic
            record={started}
            className="w-72 h-11"
            visualSetting="sinewave"
            onStop={handleAudio}
            strokeColor="#1677ff"
            backgroundColor="#FFF"
          />
        </div>
      </div>
    );
  };

  const SubmitButton = () => {
    return (
      <Button onClick={nextQuestion} size="middle" className="w-44">
        Submit Response
      </Button>
    );
  };

  const StartButton = () => {
    return (
      <Button onClick={startResponse} size="middle" className="w-44">
        Start Response
      </Button>
    );
  };

  const handleOk = () => {
    nextQuestion();
  };

  const handleCancel = () => {
    restartQuestion();
  };

  return loading ? <LoadingSubmission /> : (
    <div className="lg:max-w-screen-lg lg:mx-auto lg:justify-normal flex flex-col w-full mt-8 gap-16 lg:gap-36 h-full justify-center">
      <div className="flex">
        <div className="w-full flex flex-col gap-2">
          <div className="flex gap-4 items-center w-full">
            <p className="text-3xl font-bold">Interview</p>
            <hr className="border-l-2 border-[#BFBFBF] h-5 rounded-full"></hr>
            <p className="text-md text-[#BFBFBF]">{numQs} questions</p>
            <Progress
              className="w-24 m-0"
              percent={(questionIndex / numQs) * 100}
              showInfo={false}
            />
          </div>
          <div>
            <p className="text-md text-[#BFBFBF]">{profession}</p>
          </div>
        </div>
      </div>
      <Card title={CardTitleUI()}>
        <div className="flex justify-between">
          <div className="flex flex-col gap-5">
            <div>
              <div>{questions[questionIndex]}</div>
            </div>
            <div className="flex justify-between items-center">
              {started ? SubmitButton() : StartButton()}
            </div>
          </div>
          <Progress
            type="circle"
            percent={Math.floor((time / 120) * 100)}
            format={() =>
              `${timeConvert(Math.floor(time / 60))}:${timeConvert(time % 60)}`
            }
            size={'small'}
          />
        </div>
      </Card>
      <Modal
        title="Time ran out"
        open={time <= 0}
        onOk={handleOk}
        onCancel={handleCancel}
        okType="default"
        okText="Submit"
        cancelText="Restart"
      >
        <p>
          For behavorial interviews, you want to make your answer short and
          concise, therefore we have a two-minute time limit for each response.
          Feel free to restart your response or submit your current one!
        </p>
      </Modal>
    </div>
  );
}
