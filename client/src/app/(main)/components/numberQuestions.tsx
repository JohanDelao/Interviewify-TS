import clsx from "clsx";
import React from "react";

const NumberQuestions = ({ numberQuestions, setNumberQuestions }) => {
    const numberProps = [1, 2, 3, 4]
    return (
        <div className="flex flex-col gap-1">
            <p className="text-sm font-redHatText text-accent/60 font-medium">Number of Questions</p>
            <div className="flex items-center h-8 w-full gap-2">
                {numberProps.map((number) => {
                    return (
                        <button className={clsx("h-full w-11 rounded border-2 transition-colors", numberQuestions == number ? "border-secondary/60" : "border-accent/10")} onClick={() => setNumberQuestions(number)}>
                            <div className={clsx("w-full h-full flex items-center justify-center font-redHatText text-sm font-medium transition-colors", numberQuestions == number ? "text-secondary" : "text-accent/60")}>
                                {number}
                            </div>
                        </button>
                    )
                })}
            </div>
        </div>
    )
};

export default NumberQuestions;