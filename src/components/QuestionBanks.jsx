import { useEffect, useState } from "react"

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { toast } from "react-toastify";

function QuestionBanks({QuestionBanksData}) {

    const firstQuestionBank = Object.keys(QuestionBanksData)[0];
    const [chosenQuestionBank, setChosenQuestionBank] = useState(firstQuestionBank);

    useEffect(() => {
        console.log(chosenQuestionBank)
    }, [chosenQuestionBank])

    const notify = () => toast("Wow so easy !");

    return (
        <div className="h-screen max-h-full w-screen flex flex-row items-center justify-center p-9 gap-6">

            {/* Question Banks List Container */}
            <div className="h-full w-[20vw] py-8 px-6 gap-6 flex flex-col items-center justify-start bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40 animate-fade-right-1s transition">

                <h1 className="text-white font-bold text-3xl" onClick={() => notify()}>Question Banks</h1>

                {/* Question Banks List */}
                <div className="h-[90%] max-h-[90%] w-full flex flex-col items-center justify-start gap-4">

                    {Object.keys(QuestionBanksData).map((quesBankTitle) => (
                        <div key={quesBankTitle} className={`w-full h-[5vh]  ${chosenQuestionBank === quesBankTitle ? "bg-violet-900" : "bg-slate-900 hover:bg-slate-950"} border-slate-800 border-2 transition text-white font-semibold text-2xl  flex items-center justify-center`} onClick={() => setChosenQuestionBank(quesBankTitle)}>
                            {quesBankTitle}
                        </div>
                    ))}

                </div>
                
            </div>

            {/* Preview Container */}
            <div className="h-full w-[60vw] flex items-start justify-center overflow-y-auto animate-fade-up-1s transition">

                {/* Questions List Container */}
                <div className="w-[60vw] flex items-center justify-center p-3">
                    <div className="min-h-full h-max w-full flex flex-col items-center justify-start gap-6 text-white font-bold text-xl">
                        {chosenQuestionBank && QuestionBanksData[chosenQuestionBank].map((question, index) => (
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
            
                </div>



            </div>

            {/* Action Buttons Container */}
            <div className="h-full w-[20vw] text-white font-bold text-xl flex flex-col items-center justify-center px-6 gap-6 animate-fade-left-1s transition">
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    <Link to="/" className="w-full h-full flex items-center justify-center">
                        Back
                    </Link>
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    <Link to={`/question_banks/${chosenQuestionBank}/add_question`} className="w-full h-full flex items-center justify-center">
                        Add Questions
                    </Link>
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                    <Link to={`/question_banks/${chosenQuestionBank}/study`} className="w-full h-full flex items-center justify-center">
                        Study Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

QuestionBanks.propTypes = {
    QuestionBanksData: PropTypes.object.isRequired
}

export default QuestionBanks