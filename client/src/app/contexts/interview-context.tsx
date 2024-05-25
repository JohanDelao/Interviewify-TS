"use client"
import React, { createContext, useContext, useState } from "react";
import { Interview } from "../interfaces";

type InterviewContextProviderProps = {
    children: React.ReactNode;
};

type InterviewContext = {
    interview: Interview | null;
    setInterview: React.Dispatch<React.SetStateAction<Interview | null>>;
}

export const InterviewContext = createContext<InterviewContext | null>(null);

export default function ThemeContextProvider({
    children
} : InterviewContextProviderProps) {
    const [interview, setInterview] = useState<Interview | null>(null);
    return (
        <InterviewContext.Provider value={{interview, setInterview}}>
            {children}
        </InterviewContext.Provider>
    )
}

export function useInterviewContext(){
    const interview = useContext(InterviewContext);
    if (interview === null) {
        throw new Error("useInterviewContext must be used within a InterviewContextProvider");
    }
    return interview;
}