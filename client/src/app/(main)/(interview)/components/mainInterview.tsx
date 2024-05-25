import React from "react";
import { DownOutlined, UpOutlined } from "@ant-design/icons";
import { Interview } from "@/app/interfaces";
import clsx from "clsx";

type MainInterviewProps = {
    interview: Interview | null,
    questionIndex: number,
    setQuestionIndex: React.Dispatch<React.SetStateAction<number>>
}

const MainInterview = ({ interview, questionIndex, setQuestionIndex } : MainInterviewProps) => {

    if(!interview){
        return <div>Error with getting interview</div>
    }

    return (
        <div className="w-full h-full flex items-center justify-center">
            <div className="h-full w-full grid grid-rows-1 grid-cols-12 overflow-hidden">
                <div className="row-span-1 col-span-2"></div>
                <div className="row-span-1 col-span-8 transition-transform" style={{transform: `translateY(-${100 * questionIndex}%)`}}>
                    {interview?.questions.map((question) => {
                        return (
                            <div className="h-full w-full flex items-center justify-center">
                                <p className={clsx("font-urbanist text-3xl font-medium w-9/12 mx-auto", question === interview.questions[questionIndex] ? "text-accent" : "text-accent/50")}>{question}</p>
                            </div>
                        )
                    })}
                </div>
                <div className="row-span-1 col-span-2 flex items-center justify-center">
                    <div className="flex flex-col h-20 w-10 rounded-lg border-2 border-accent/10">
                        {/* TO DO: Determine if the up is needed */}
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
                </div>
            </div>
        </div>
    )
};

export default MainInterview;