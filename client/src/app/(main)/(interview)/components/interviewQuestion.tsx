import React, { useState } from 'react';
import { CirclePlay, CircleStop, Mic, MicOff } from 'lucide-react';
import clsx from 'clsx';
import { ReactMic } from 'react-mic';

type InterviewQuestionProps = {
  current: boolean;
  question: string;
  setBlobs: React.Dispatch<React.SetStateAction<any[]>>;
  started: boolean;
  startResponse: () => void;
  nextQuestion: () => void;
};

type StartButtonProps = {
    startResponse: () => void;
}

const StartButton = ( { startResponse } : StartButtonProps ) => {
  return (
    <button
      className="p-2 px-4 rounded-md bg-secondary/80 hover:bg-secondary transition-colors h-10 w-48 flex items-center justify-center gap-3"
      onClick={() => startResponse()}
    >
      <CirclePlay className='w-5 h-5 text-white' />
      <p className="font-redHatText font-medium text-base text-white">
        Start Response
      </p>
    </button>
  );
};

type DuringButtonsProps = {
    muted: boolean;
    setMuted: React.Dispatch<React.SetStateAction<boolean>>;
    nextQuestion: () => void;
}

// TODO: Parameters: muted, setMuted, submitBlob, RestartButton
const DuringButtons = ( { muted, setMuted, nextQuestion } : DuringButtonsProps ) => {
  return <div className='flex items-center gap-4'>
    {/* Mute Button */}
    <button className='bg-transparent text-accent/60' onClick={() => setMuted(prev => !prev)}>
        {muted ? <MicOff className='w-6 h-6' /> : <Mic className='w-6 h-6' />}
    </button>
    {/* Submit Button */}
    <button
      className="p-2 px-4 rounded-md bg-secondary/80 hover:bg-secondary h-10 w-48 flex items-center justify-center gap-3"
      onClick={() => nextQuestion()}
    >
      <CircleStop className='w-4 h-4 text-white' />
      <p className="font-redHatText font-medium text-base text-white">
        Submit Response
      </p>
    </button>
  </div>;
};

const InterviewQuestion = ({
  current,
  question,
  setBlobs,
  started, 
  startResponse,
  nextQuestion
}: InterviewQuestionProps) => {
  function handleAudio(recordedBlob: any) {
    setBlobs((prevBlobs) => [...prevBlobs, recordedBlob.blob]);
  }

  const [muted, setMuted] = useState<boolean>(false);

  return (
    <div className="h-full w-full flex flex-col gap-8 items-center justify-center">
      <p
        className={clsx(
          'font-urbanist text-3xl font-medium w-9/12 mx-auto text-center',
          current ? 'text-accent' : 'text-accent/50',
        )}
      >
        {question}
      </p>
      <ReactMic
        record={started}
        className="w-6/12 h-11"
        visualSetting="sinewave"
        onStop={handleAudio}
        strokeColor="#1677ff"
        backgroundColor="#F8F8FF"
      />
      <div className="flex justify-center items-center">
        {started ? <DuringButtons muted={muted} setMuted={setMuted} nextQuestion={nextQuestion} /> : <StartButton startResponse={startResponse} />}
      </div>
    </div>
  );
};

export default InterviewQuestion;
