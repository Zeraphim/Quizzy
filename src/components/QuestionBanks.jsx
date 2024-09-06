import { useState } from "react"

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { toast } from "react-toastify";

function QuestionBanks({QuestionBanksData, firstQuestionBank, setQuestionBanksData}) {

    const [chosenQuestionBank, setChosenQuestionBank] = useState(firstQuestionBank);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newQuestionBankName, setNewQuestionBankName] = useState('');

    // For Debugging
    // useEffect(() => {
    //     console.log(chosenQuestionBank)
    // }, [chosenQuestionBank])

    // const notify = () => toast("Wow so easy !");


    const handleSave = () => {
        if (newQuestionBankName.trim() === '') {
            toast.error("Question bank name cannot be empty.");
            return;
        }

        if (Object.prototype.hasOwnProperty.call(QuestionBanksData, newQuestionBankName)) {
            toast.error("Question bank name already exists.");
            return;
        }

        const updatedQuestionBanksData = {
            ...QuestionBanksData,
            [newQuestionBankName]: []
        };

        setQuestionBanksData(updatedQuestionBanksData);

        toast.success("Question bank added successfully!");
        setIsModalOpen(false);
    };

    return (
        <div className="h-screen max-h-full w-screen flex flex-row items-center justify-center p-9 gap-6">

            {isModalOpen && (
                <div
                className="z-40 absolute h-screen w-screen flex flex-col justify-center items-center backdrop-blur-3xl bg-black backdrop-filter bg-opacity-15">
                {/* Card */}
                <div className="h-1/3 max-h-1/3 w-2/3 lg:w-1/3 flex flex-col gap-6 justify-center items-center p-10 text-wrap z-500 rounded-3xl backdrop-blur-3xl bg-slate-300 dark:bg-white backdrop-filter bg-opacity-80 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white drop-shadow-lg text-white shadow-md transition animate-fade-up-1s">
                    <h1 className="flex-[10%] text-3xl font-bold text-black dark:text-white">
                        Add Question Bank
                    </h1>

                    {/* Add Question Bank Form */}
                    <div className="flex-[70%] flex flex-row gap-3 max-h-[70%] overflow-y-auto items-center justify-center z-50 text-black dark:text-white">
                        <h1 className="text-xl font-bold">Name: </h1>
                        <input type="text" placeholder="New Bank" className="input input-bordered w-full max-w-xs bg-slate-100 dark:bg-slate-800 bg-opacity-30" 
                        onChange={(e) => setNewQuestionBankName(e.target.value)}
                        value={newQuestionBankName}
                        />
                    </div>

                    <div className="flex flex-row items-center justify-center gap-6 z-50">
                        <div className="text-white mt-6 font-bold text-lg sm:text-2xl p-4 rounded-lg bg-red-500 hover:bg-red-600 transition" onClick={() => setIsModalOpen(!isModalOpen)}>
                            Close ✖️
                        </div>
                        <div className="text-white mt-6 font-bold text-lg sm:text-2xl p-4 rounded-lg bg-teal-500 hover:bg-teal-600 transition" onClick={handleSave}>
                            Save ☑️
                        </div>
                    </div>


                </div>
                </div>
            )}


            {/* Question Banks List Container */}
            <div className="h-full w-[20vw] py-8 px-6 gap-6 flex flex-col items-center justify-start bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-30 animate-fade-right-1s transition shadow-md">

                <h1 className="text-black dark:text-white font-bold text-3xl">Question Banks</h1>

                {/* Question Banks List */}
                <div className="h-[90%] max-h-[90%] w-full flex flex-col items-center justify-start gap-4 overflow-y-auto">

                    {Object.keys(QuestionBanksData).map((quesBankTitle) => (
                        <div key={quesBankTitle} className={`w-full h-[5vh]  ${chosenQuestionBank === quesBankTitle ? "bg-violet-900 text-white" : "bg-slate-300 dark:bg-slate-900 hover:bg-slate-400 dark:hover:bg-slate-950 text-black dark:text-white"} border-slate-800 border-opacity-[15%] dark:border-opacity-[4%] border-2 transition font-semibold text-2xl  flex items-center justify-center rounded-lg`} onClick={() => setChosenQuestionBank(quesBankTitle)}>
                            {quesBankTitle}
                        </div>
                    ))}

                </div>

                {/* Add Question Bank */}
                <div className="flex w-full items-center justify-center">
                    <div className="w-2/3 h-14 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white font-bold" onClick={() => setIsModalOpen(!isModalOpen)}>
                        Add Bank
                    </div>
                </div>
                
            </div>

            {/* Preview Container */}
            <div className="h-full w-[60vw] flex items-start justify-center overflow-y-auto animate-fade-up-1s transition">

                {/* Questions List Container */}
                <div className="w-[60vw] flex items-center justify-center p-3">
                    <div className="min-h-full h-max w-full flex flex-col items-center justify-start gap-6 text-black dark:text-white font-bold text-xl">
                        {chosenQuestionBank && (
                            QuestionBanksData[chosenQuestionBank].length === 0 ? (
                                <div className="text-center full flex items-center justify-center text-gray-500 dark:text-gray-400">
                                    Bank is empty
                                </div>
                            ) : (
                                QuestionBanksData[chosenQuestionBank].map((question, index) => (
                                    <div key={index} tabIndex="0" className="collapse collapse-arrow border-base-300 bg-slate-300 dark:bg-slate-300 bg-opacity-30 dark:bg-opacity-10 border border-opacity-[15%] dark:border-opacity-[4%] shadow-md">
                                        <input type="checkbox" />
                                        <div className="collapse-title">
                                            <div className="text-sm text-violet-600 dark:text-violet-400">
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
                                ))
                            )
                        )}
                    </div>
            
                </div>



            </div>

            {/* Action Buttons Container */}
            <div className="h-full w-[20vw] text-black dark:text-white font-bold text-xl flex flex-col items-center justify-center px-6 gap-6 animate-fade-left-1s transition">
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                    <Link to="/user" className="w-full h-full flex items-center justify-center">
                        Back
                    </Link>
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white ">
                    <Link to={`/user/question_banks/${chosenQuestionBank}/add_question`} className="w-full h-full flex items-center justify-center">
                        Add Questions
                    </Link>
                </div>
                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white ">
                    <Link to={`/user/question_banks/study`} className="w-full h-full flex items-center justify-center">
                        Study Now
                    </Link>
                </div>
            </div>
        </div>
    )
}

QuestionBanks.propTypes = {
    QuestionBanksData: PropTypes.object.isRequired,
    firstQuestionBank: PropTypes.string.isRequired,
    setQuestionBanksData: PropTypes.func.isRequired
}

export default QuestionBanks