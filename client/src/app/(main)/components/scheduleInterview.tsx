import { VideoCameraOutlined, LoadingOutlined } from "@ant-design/icons";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import ProfessionDropdown from "../components/professionDropdown";
import NumberQuestions from "../components/numberQuestions";
import { useInterviewContext } from "@/app/contexts/interview-context";
import { ProfessionType } from "@/app/interfaces";
import GetQuestions from "@/app/utils/get-questions";

const ScheduleInterview = () => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const [profession, setProfession] = useState<ProfessionType>(ProfessionType.SOFTWARE_ENGINEER);
  const [numberQuestions, setNumberQuestions] = useState<number>(1);
  const router = useRouter();
  const { setInterview } = useInterviewContext();

  const handleCreateInterview = () => {
    setIsButtonLoading(true);
    const questions = GetQuestions(profession, numberQuestions);
    setInterview({questionCount: numberQuestions, profession: profession, questions: questions});
    setTimeout(() => router.push('/interview'), 500);
  }

    return (
        <div className="w-full h-fit rounded-xl bg-white border-2 border-accent/10 p-4 flex flex-col gap-3 items-center">
            <div className="w-full flex items-center gap-3 text-xl text-center text-secondary">
                <VideoCameraOutlined className="text-xl flex items-center" />
                <p className="font-urbanist text-lg font-semibold">Schedule Interview</p>
            </div>
            <hr className="w-full h-0.5 bg-accent/5"></hr>
            <div className="w-full flex justify-between items-center">
                <div className="flex gap-8 items-center">
                    <ProfessionDropdown profession={profession} setProfession={setProfession} />
                    <NumberQuestions numberQuestions={numberQuestions} setNumberQuestions={setNumberQuestions} />
                </div>
                <button className="w-40 rounded bg-secondary/80 h-10 flex items-center justify-center transition-colors hover:bg-secondary" onClick={() => handleCreateInterview()}>
                    {isButtonLoading ? <LoadingOutlined className="text-base text-white" /> : <p className="text-white font-redHatText font-semibold text-base">Start Interview</p>}
                </button>
            </div>
        </div>
    )
};

export default ScheduleInterview;