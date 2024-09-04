
import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { useEffect, useState } from "react";

function StudyQuestionBank({QuestionBanksData, firstQuestionBank, answeredQuestionBanks, setAnsweredQuestionBanks}) {

    const [chosenQuestionBank, setChosenQuestionBank] = useState(firstQuestionBank);
    const [chosenBankNumberOfItems, setChosenBankNumberOfItems] = useState();
    const [chosenBankNumberOfAnsweredItems, setChosenBankNumberOfAnsweredItems] = useState();
    const [chosenBankNumberOfItemsLeft, setChosenBankNumberOfItemsLeft] = useState();

    const [isAnswering, setIsAnswering] = useState(false);

    // Session Stats
    const [correctAnswers, setCorrectAnswers] = useState(0);
    const [incorrectAnswers, setIncorrectAnswers] = useState(0);
    const [totalAnswered, setTotalAnswered] = useState(0);

    // Card States
    const [cardClicked, setCardClicked] = useState(false);

    useEffect(() => {

        // Count the number of items in the chosen question bank
        if (chosenQuestionBank && Array.isArray(QuestionBanksData[chosenQuestionBank]) && QuestionBanksData[chosenQuestionBank].length !== undefined ) {
            setChosenBankNumberOfItems(QuestionBanksData[chosenQuestionBank].length);
        } else {
            setChosenBankNumberOfItems(0);
        }

        // Count the number of answered Items
        if (answeredQuestionBanks[chosenQuestionBank] && answeredQuestionBanks[chosenQuestionBank].length !== undefined) {
            setChosenBankNumberOfAnsweredItems(answeredQuestionBanks[chosenQuestionBank].length);
        } else {
            setChosenBankNumberOfAnsweredItems(0);
        }

        // Count the number of unanswered items
        if (answeredQuestionBanks[chosenQuestionBank] && answeredQuestionBanks[chosenQuestionBank].length !== undefined) {
            setChosenBankNumberOfItemsLeft(QuestionBanksData[chosenQuestionBank].length - answeredQuestionBanks[chosenQuestionBank].length);
        } else {
            setChosenBankNumberOfItemsLeft(QuestionBanksData[chosenQuestionBank] ? QuestionBanksData[chosenQuestionBank].length : 0);
        }

    }, [QuestionBanksData, answeredQuestionBanks, chosenQuestionBank]);

    const [questionsToAnswer, setQuestionsToAnswer] = useState({});
    const [currentQuestion, setCurrentQuestion] = useState("");
    const [currentQuestionAnswer, setCurrentQuestionAnswer] = useState("");
    const [currentQuestionType, setCurrentQuestionType] = useState("");

    const handleStartClick = () => {
        setIsAnswering(true);

        let setQuestions = QuestionBanksData[chosenQuestionBank];

        setQuestionsToAnswer(setQuestions);
    };

    useEffect(() => {
        if (Object.keys(questionsToAnswer).length > 0) {
            const firstKey = Object.keys(questionsToAnswer)[0];
            setCurrentQuestion(questionsToAnswer[firstKey].Question);
            setCurrentQuestionAnswer(questionsToAnswer[firstKey].Answer);
            setCurrentQuestionType(questionsToAnswer[firstKey].Type);
        }
    }, [questionsToAnswer]);

    const handleHardClick = () => {
        setTotalAnswered(totalAnswered + 1);
        setIncorrectAnswers(incorrectAnswers + 1);

        setCardClicked(false);

        const firstKey = Object.keys(questionsToAnswer)[0];
        delete questionsToAnswer[firstKey];

        const remainingQuestions = Object.values(questionsToAnswer);
        if (remainingQuestions.length > 0) {
            setCurrentQuestion(remainingQuestions[0].Question);
            setCurrentQuestionAnswer(remainingQuestions[0].Answer);
            setCurrentQuestionType(remainingQuestions[0].Type);
        } else {
            setCurrentQuestion(null);
            setCurrentQuestionAnswer(null);
            setCurrentQuestionType(null);
        }
    };

    const handleBasicClick = () => {
        setTotalAnswered(totalAnswered + 1);
        setCorrectAnswers(correctAnswers + 1);

        setCardClicked(false);

        const firstKey = Object.keys(questionsToAnswer)[0];
        delete questionsToAnswer[firstKey];

        const remainingQuestions = Object.values(questionsToAnswer);
        if (remainingQuestions.length > 0) {
            setCurrentQuestion(remainingQuestions[0].Question);
            setCurrentQuestionAnswer(remainingQuestions[0].Answer);
            setCurrentQuestionType(remainingQuestions[0].Type);
        } else {
            setCurrentQuestion(null);
            setCurrentQuestionAnswer(null);
            setCurrentQuestionType(null);
        }
    };


    return (
        <div className="h-screen max-h-full w-screen flex flex-row items-center justify-center p-9 gap-6">

            {/* Question Banks List Cover */}
            {isAnswering && (
                <div className="h-full w-[20vw] bg-slate-200 dark:bg-slate-900 z-50">
                </div>
            )}

            {/* Question Banks List Container */}
            {!isAnswering && (
                <div className="h-full w-[20vw] py-8 px-6 gap-6 flex flex-col items-center justify-start bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition shadow-md select-none">

                    <h1 className="text-black dark:text-white font-bold text-3xl" onClick={() => console.log()}>Study Now</h1>

                    {/* Question Banks List */}
                    <div className="h-[90%] max-h-[90%] w-full flex flex-col items-center justify-start gap-4">

                        {Object.keys(QuestionBanksData).map((quesBankTitle) => (
                            <div key={quesBankTitle} className={`w-full h-[5vh]  ${chosenQuestionBank === quesBankTitle ? "bg-violet-900 text-white" : "bg-slate-300 dark:bg-slate-900 hover:bg-slate-400 dark:hover:bg-slate-950 text-black dark:text-white"} border-slate-800 border-opacity-[15%] dark:border-opacity-[4%] border-2 transition font-semibold text-2xl  flex items-center justify-center rounded-lg`} onClick={() => setChosenQuestionBank(quesBankTitle)}>
                                {quesBankTitle}
                            </div>
                        ))}

                    </div>
                    
                </div>
            )}


            {/* Post Cards Container */}
            {isAnswering && (
                <div className="h-screen max-h-screen w-[60vw] flex flex-col items-center justify-center animate-fade-up-1s transition bg-slate-200 dark:bg-slate-900 z-50">

                    <div className="w-full h-[5vh] flex items-center justify-center text-3xl font-bold">
                        {chosenQuestionBank}
                    </div>

                    {/* Card container */}
                    <div className="w-full h-[75vh] max-h-screen flex items-center justify-center">
                        <div className="stack w-full h-auto">

                            {/* Flippable Card */}
                            {chosenBankNumberOfItems - totalAnswered !== 0 ? (
                                <label className="swap swap-flip text-2xl card w-[50%] h-full">
                                    <input type="checkbox" className="h-[65vh] w-[27vw]" onClick={() => setCardClicked(true)} checked={cardClicked} />

                                    <div className="swap-on p-10 flex flex-col items-center justify-start h-full w-[27vw] max-w-[27vw] text-center bg-slate-300 dark:bg-white rounded-3xl overflow-hidden border-2 border-opacity-[15%] dark:border-opacity-[40%] border-slate-900 dark:border-white text-wrap">
                                        <div>{currentQuestionType}</div>
                                        <div>{currentQuestion}</div>
                                    </div>

                                    <div className="swap-on p-10 flex flex-col items-center justify-start h-full w-[27vw] max-w-[27vw] text-center bg-slate-300 dark:bg-white rounded-3xl overflow-hidden border-2 border-opacity-[15%] dark:border-opacity-[40%] border-slate-900 dark:border-white text-wrap">
                                        <div className="text-[1rem] font-bold text-violet-500">Answer</div>
                                        <div>{currentQuestionAnswer}</div>
                                    </div>
                                </label>
                            ) : (
                                <div className="congratulations-message w-full h-full flex items-center justify-center text-2xl font-bold">
                                    Congratulations! You have answered all the questions. 🥳
                                </div>
                            )}
                            
                            {Array.from({ length: chosenBankNumberOfItems - (totalAnswered + 1) }).map((_, index) => (
                                <div key={index} className="card h-[65vh] w-2/4 text-center bg-slate-300 dark:bg-white rounded-3xl overflow-hidden border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white">
                                    <div className="card-body"></div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="w-full h-[15vh] flex items-center justify-center gap-6 text-black dark:text-white font-bold text-xl">

                        {/* Actions */}
                        {cardClicked && (

                            <div className="w-full h-[15vh] flex items-center justify-center gap-6 text-black dark:text-white font-bold text-xl">

                                <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-red-600 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white hover:scale-105" onClick={handleHardClick}>
                                    😓 Hard
                                </div>

                                <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-teal-500 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white hover:scale-105" onClick={handleBasicClick}>
                                    👌 Basic
                                </div>

                            </div>
                        )}

                    </div>

                </div>
            )}

            {/* Initial Cards Container */}
            {!isAnswering && (
                <div className="h-screen max-h-screen w-[60vw] flex items-start justify-center animate-fade-up-1s transition">

                    {/* Card List Container */}
                    <div className="w-[60vw] max-h-screen flex items-center justify-center p-3">
                        <div className="min-h-full h-screen w-full flex flex-col items-center justify-center gap-6 text-black dark:text-white font-bold text-xl">
                            {/* {chosenQuestionBank && QuestionBanksData[chosenQuestionBank].map((question, index) => (
                            // <div key={index} className="w-full h-28 flex items-center justify-center bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white">
                            //     {question.Question}
                            // </div>

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
                            ))} */}

                            <div className="w-1/2 h-auto rounded-lg flex flex-col gap-4 items-center justify-center bg-opacity-30">

                                <div>
                                    Question Bank Name: <b className="font-normal">{chosenQuestionBank}</b>
                                </div>
                                
                                <div>
                                    Number of Items: <b className="font-normal">{chosenBankNumberOfItems}</b>
                                </div>

                                {/* <div>
                                    Answered Items: <b className="font-normal">{chosenBankNumberOfAnsweredItems}</b>
                                </div>

                                <div>
                                    Remaining Items: <b className="font-normal">{chosenBankNumberOfItemsLeft}</b>
                                </div> */}


                            </div>

                            <div className="w-1/2 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-teal-500 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white" onClick={handleStartClick}>
                                Start Now
                            </div>

                        </div>
                
                    </div>

                </div>
            )}

            


            {/* Action Buttons Container */}
            <div className="h-full w-[25vw] text-black dark:text-white font-bold text-xl flex flex-col items-center justify-center px-6 gap-6 animate-fade-left-1s transition">


                <div className="w-full h-auto rounded-lg flex flex-col gap-4 items-center justify-center bg-opacity-30 g-slate-300 transition dark:bg-white hover:scale-105 p-3 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white">

                    <div className="text-2xl">
                        Session Stats 📊
                    </div>
                    
                    <div className="flex flex-col items-center justify-center">

                        <div>
                            Correct Answers: {correctAnswers}
                        </div>

                        <div>
                            Incorrect Answers: {incorrectAnswers}
                        </div>

                        <div>
                            Total Answered: {totalAnswered}
                        </div>

                    </div>

                </div>

                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                    <Link to="/" className="w-full h-full flex items-center justify-center">
                        Back
                    </Link>
                </div>

                {/* Bank Button Dropdown */}
                <div className="dropdown dropdown-hover h-20 w-full">
                    <div tabIndex={0} role="button" className="btn h-full w-full text-black dark:text-white font-bold text-xl bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                        Switch
                    </div>
                    <ul tabIndex={0} className="dropdown-content menu text-black dark:text-white bg-slate-300 dark:bg-slate-800 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white rounded-box z-[1] w-52 p-2 shadow">
                        <li>
                            <Link to={`/question_banks/study`} className="w-full h-full dark-hover:bg-slate-400">
                                <a className={``}>Question Bank</a>
                            </Link>
                        </li>
                        <li>
                            <Link to={`/math_banks/study`} className="w-full h-full dark-hover:bg-slate-400">
                                <a className={``}>Math Bank</a>
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="w-full h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white ">
                    <Link to={`/question_banks/${chosenQuestionBank}/study`} className="w-full h-full flex items-center justify-center">
                        Save
                    </Link>
                </div>
            </div>
        </div>
    );
}

StudyQuestionBank.propTypes = {
    QuestionBanksData: PropTypes.object.isRequired,
    firstQuestionBank: PropTypes.string.isRequired,
    answeredQuestionBanks: PropTypes.object.isRequired,
    setAnsweredQuestionBanks: PropTypes.func.isRequired
}

export default StudyQuestionBank;