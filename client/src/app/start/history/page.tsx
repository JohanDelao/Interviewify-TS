'use client';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CaretDownOutlined,
  CaretUpOutlined,
  LoadingOutlined,
} from '@ant-design/icons';
import { Spin } from 'antd';
import { useRouter } from 'next/navigation';

export default function History() {
  const [previousInterviews, setPreviousInterviews] = useState<any[]>([]);
  const [loading, setLoading] = useState<Boolean>(true);

  const router = useRouter();

  function getAverageScore(feedbacks: any) {
    const length = feedbacks.length;
    const totalScore = feedbacks.reduce(
      (accumulator: number, feedback: any) => accumulator + feedback.score,
      0,
    );
    return Math.floor(totalScore / length);
  }

  function extractDateFromTimestamp(timestamp: any) {
    const dateObject = new Date(timestamp);
    const year = dateObject.getFullYear();
    const month = String(dateObject.getMonth() + 1).padStart(2, '0'); // Months are zero-indexed
    const day = String(dateObject.getDate()).padStart(2, '0');

    return `${month}-${day}-${year}`;
  }

  useEffect(() => {
    const getAllUserInterviews = async () => {
      try {
        const resp = await axios.get(
          'http://localhost:4000/mongo/get-all-interviews',
          {
            withCredentials: true,
          },
        );
        setPreviousInterviews(resp.data);
      } catch (error) {
        console.log('error: ' + error);
      }
    };
    getAllUserInterviews().then(() => setTimeout(() => setLoading(false), 500));
  }, []);

  return (
    <div className="lg:max-w-screen-lg lg:mx-auto flex flex-col w-full mt-8 gap-5">
      <div className="flex flex-col gap-4 mx-auto md:mx-auto px-4 md:px-0 md:w-full w-10/12">
        <p className="text-2xl font-bold">History</p>
      </div>
      {!loading ? (
        <div className="flex flex-col gap-2 mx-auto px-4 md:px-0 md:w-full w-10/12">
          {previousInterviews.length === 0 ? (
            <p>You have no history of interviews, schedule one today!</p>
          ) : (
            <div className="shadow-md overflow-hidden my-4">
              <table className="border-collapse table-fixed w-full text-sm rounded-t-md">
                <thead className="text-base">
                  <tr className="bg-[#F5F5F5]">
                    <th className="border-b p-4 pl-8 pt-3 pb-3 text-[#595959] text-center font-bold">
                      Position
                    </th>
                    <th className="border-b p-4 pt-3 pb-3 text-[#3772FF] text-center font-bold flex justify-center gap-1">
                      <p>Duration</p>
                      <div className="flex flex-col text-xs">
                        <CaretUpOutlined />
                        <CaretDownOutlined />
                      </div>
                    </th>
                    <th className="border-b p-4 pr-8 pt-3 pb-3 text-[#595959] text-center font-bold">
                      Questions
                    </th>
                    <th className="border-b p-4 pr-8 pt-3 pb-3 text-[#595959] text-center font-bold">
                      Score
                    </th>
                    <th className="border-b p-4 pr-8 pt-3 pb-3 text-[#595959] text-center font-bold">
                      Date
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  {/* TO DO: fix this type, make interface */}
                  {previousInterviews
                    .reverse()
                    .map((previousInterview: any) => {
                      const { interview, feedback } = previousInterview;
                      const score = getAverageScore(feedback);

                      if (feedback.length <= 0) {
                        return;
                      } else {
                        return (
                          <tr
                            className="hover:bg-[#fafafa] cursor-pointer"
                            key={interview._id}
                            onClick={() => {
                              router.push(`/start/feedback?id=${interview._id}`);
                            }}
                          >
                            <td className="border-b border-slate-100 p-4 pl-8 text-black font-semibold text-center">
                              Software Engineer
                            </td>
                            <td className="border-b border-slate-100 p-4 text-slate-500 text-center">
                              00:30
                            </td>
                            <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                              {feedback.length}
                            </td>
                            <td
                              className={`border-b border-slate-100 p-4 pr-8 text-center ${
                                score > 90
                                  ? 'text-[#389e0d]'
                                  : score > 75
                                  ? 'text-[#73d13d]'
                                  : score > 50
                                  ? 'text-[#ffa940]'
                                  : 'text-[#f5222d]'
                              }`}
                            >
                              {getAverageScore(feedback)}
                            </td>
                            <td className="border-b border-slate-100 p-4 pr-8 text-slate-500 text-center">
                              {extractDateFromTimestamp(interview.created_at)}
                            </td>
                          </tr>
                        );
                      }
                    })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      ) : (
        <div className="h-[80vh] flex justify-center items-center">
          <Spin
            indicator={<LoadingOutlined style={{ fontSize: 50 }} />}
            size="large"
          />
        </div>
      )}
    </div>
  );
}
