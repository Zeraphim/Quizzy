import { useEffect, useState } from "react"
import question_banks_data from "../data/quizzes_temp.json"

import { Link } from "react-router-dom";

function QuestionBanks() {

    const firstQuestionBank = Object.keys(question_banks_data)[0];
    const [chosenQuestionBank, setChosenQuestionBank] = useState(firstQuestionBank);

    useEffect(() => {
        console.log(chosenQuestionBank)
    }, [chosenQuestionBank])

    return (
        <div className="h-screen max-h-screen w-screen flex flex-row items-center justify-center p-9 gap-6">
            {/* Question Banks List Container */}
            <div className="h-full w-[20vw] py-8 px-6 gap-6 flex flex-col items-center justify-start bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">

                <h1 className="text-white font-bold text-3xl">Question Banks</h1>

                {/* Question Banks List */}
                <div className="h-[90%] max-h-[90%] w-full flex flex-col items-center justify-start gap-4">

                    {Object.keys(question_banks_data).map((quesBankTitle) => (
                        <div key={quesBankTitle} className={`w-full h-[5vh]  ${chosenQuestionBank === quesBankTitle ? "bg-violet-900" : "bg-slate-900 hover:bg-slate-950"} border-slate-800 border-2 transition text-white font-semibold text-2xl  flex items-center justify-center`} onClick={() => setChosenQuestionBank(quesBankTitle)}>
                            {quesBankTitle}
                        </div>
                    ))}

                </div>
                
            </div>

            {/* Questions List Container */}
            <div className="h-full w-[60vw] flex flex-col items-center justify-start gap-6 text-white font-bold text-xl">
                
                {chosenQuestionBank && question_banks_data[chosenQuestionBank].map((question, index) => (
                // <div key={index} className="w-full h-28 flex items-center justify-center bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white">
                //     {question.Question}
                // </div>

                <div key={index} tabIndex="0" className="collapse collapse-arrow border-base-300 bg-base-200 border">
                    <input type="checkbox" />
                    <div className="collapse-title">
                        <div className="text-sm text-violet-400">
                            {question.Type}
                        </div>
                        <div className="text-xl font-medium">
                            {question.Question}
                        </div>

                    </div>
                    <div className="collapse-content">
                        <p>{question.Answer}</p>
                    </div>
                </div>
                ))}

            </div>

            {/* Action Buttons Container */}
            <div className="h-full w-[20vw] text-white font-bold text-xl flex flex-col items-center justify-start px-6 gap-6">
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    <Link to="/" className="w-full h-full flex items-center justify-center">
                        Back
                    </Link>
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    Add Questions
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    Study Now
                </div>
            </div>
        </div>
    )
}

export default QuestionBanks