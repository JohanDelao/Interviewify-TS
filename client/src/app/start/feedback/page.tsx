'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Feedback } from '../../interfaces';
import LoadingSubmission from '../../components/loadingSubmission';
import { Card, Tooltip } from 'antd';
import { useSearchParams } from 'next/navigation'
import { InfoCircleOutlined } from '@ant-design/icons';

function FeedbackCard( props: Feedback ) {
  const { answer, explanation, feedback, question, score } = props;

  return (
    <Card className='w-full'>
      <div className='flex flex-col gap-4'>
        <div className='flex gap-1'>
          <p className='text-xl font-bold'>{question} <Tooltip title={explanation}><InfoCircleOutlined className='text-lg my-auto' /></Tooltip></p>
        </div>
        <div className='grid grid-cols-2 gap-4'>
          <div className='col-span-1'>
            <p className='text-justify w-full text-[#626262]'>"{answer}"</p>
          </div>
          <div className='col-span-1'>
            <div className='w-full rounded-md bg-[#52c41a] flex flex-col p-3 text-white'>
              <div className='flex flex-col'>
                <p className='font-bold'>Feedback:</p>
                <p>{feedback}</p>
              </div>
              <div className='flex gap-1 font-bold'>
                <p>Score: </p>
                <p>{score}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState<Feedback[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const searchParams = useSearchParams();
  const interviewID = searchParams.get('id');

  useEffect(() => {
    const getLatestInterview = async () => {
      try {
        const resp = await axios.get(
          `http://localhost:4000/mongo/get-interview${interviewID ? `?interviewID=${interviewID}` : ''}`,
          {
            withCredentials: true,
          },
        );
        setFeedback(resp.data);
      } catch (error) {
        console.log(error)
      }
    }
    setLoading(true);
    getLatestInterview().then(() => setTimeout(() => setLoading(false), 500));
  }, [])

  return loading ? <LoadingSubmission /> : feedback ? (
    <div className="lg:max-w-screen-lg h-full lg:mx-auto flex flex-col w-full mt-8 gap-16 lg:gap-36">
      <div className="flex flex-col gap-5 mx-auto md:mx-auto px-4 md:px-0 md:w-11/12 w-10/12">
        <p className="text-2xl font-bold">Feedback</p>
        <div className='flex flex-col gap-3 w-full overflow-y-auto'>
          {feedback.map((feedback) => {
            return (
              <FeedbackCard {...feedback} />
            )
          })}
        </div>
      </div>
    </div>
  ) : <> No Feedback </>;
}
