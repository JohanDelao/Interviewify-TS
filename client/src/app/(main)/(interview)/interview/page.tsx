"use client"
import React, { useState } from "react";
import { useInterviewContext } from "../../../contexts/interview-context";
import InterviewPrompt from "../components/InterviewPrompt";
import Timer from "../components/timer";
import QuestionBars from "../components/questionBars";
import GetQuestions from "@/app/utils/get-questions";
import MainInterview from "../components/mainInterview";

const Interview = () => {
    const { interview } = useInterviewContext();
    const [prompt, setPrompt] = useState(true);

    const [questionIndex, setQuestionIndex] = useState<number>(0);

    if(prompt === true){
        return (
            <div className="w-full h-full flex justify-center items-center">
                <InterviewPrompt setPrompt={setPrompt} />
            </div>
        )
    }

    return (
        <div className="flex flex-col w-full h-full">
            <div className="grid grid-rows-1 grid-cols-12 p-4 pb-0 h-14 items-center">
                <div className="flex items-center justify-start row-span-1 col-span-2"><p className="font-redHatText text-base font-medium text-accent"><span className="text-secondary">{interview?.profession}</span> Interview</p></div>
                <div className="row-span-1 col-span-1"></div>
                <QuestionBars interview={interview} questionIndex={questionIndex} />
                <div className="row-span-1 col-span-1"></div>
                <Timer />
            </div>
            <div className="h-[calc(100vh-3.5rem)] w-full p-4 pb-0 overflow-hidden">
                <MainInterview interview={interview} questionIndex={questionIndex} setQuestionIndex={setQuestionIndex} />
            </div>
        </div>
    )
};

export default Interview;