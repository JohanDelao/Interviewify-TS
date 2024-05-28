"use client"
import React from "react";
import Image from "next/image";
import { useInterviewContext } from "@/app/contexts/interview-context";

const ChatBubble = '/images/DoubleChatBubble.png';

type InterviewPromptProps = {
    setPrompt: React.Dispatch<React.SetStateAction<boolean>>;
}

const InterviewPrompt = ({ setPrompt } : InterviewPromptProps) => {
    const { interview } = useInterviewContext();

    return (
        <div className="w-10/12 lg:w-8/12 xl:w-5/12 p-6 rounded-xl bg-white border-accent/10 border-2">
            <div className="w-full h-full flex flex-col gap-6">
                <div className="flex flex-col gap-3 text-base font-redHatText">
                    <Image src={ChatBubble} width={36} height={30} alt="chat bubble icon" />
                    <p className="text-xl font-urbanist font-semibold text-accent">Behavorial Interview Practice</p>
                </div>
                <p className="font-medium text-accent/80">This interview will be for a <span className="text-secondary">{interview?.profession}</span></p>
                <p className="font-medium text-accent/80">This interview will consist of <span className="text-secondary">{interview?.questionCount}</span> questions, each of which you will have <span className="text-secondary">two minutes</span> to answer. You will have one opportunity to redo your response if something unexpected occurs.</p>
                <p className="font-medium text-accent/80">Please ensure that you grant <span className="text-secondary">microphone permission</span> to answer these questions when prompted.</p>
                <hr className="w-full h-0.5 border-t-2 border-accent/10 border-dashed"></hr>
                <button className="p-2 px-4 rounded-md bg-secondary/80 hover:bg-secondary w-fit" onClick={() => setPrompt(false)}><p className="font-redHatText font-medium text-base text-white">Start Interview</p></button>
            </div>
        </div>
    )
}

export default InterviewPrompt;