import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';

function AddQuestion({QuestionBanksData, setQuestionBanksData}) {

    let currentQuestionBankData = QuestionBanksData;

    const [newQuestionBankData, setNewQuestionBankData] = useState({});

    const [currentQuestionBanksData, setCurrentQuestionBanksData] = useState(QuestionBanksData);
    const [textAreaContent, setTextAreaContent] = useState("");
    
    const { questionBankName } = useParams();

    /*

    Question Types Formatting:

    1. True or False - True or False

        Question: [The Question]
        Type: Enumeration
        Answer: [True/False]

    2. Multiple Choice - Choices are given, choose the correct answer

        Question: [The Question]
        Type: Multiple Choice
        Choices: [Choice A; Choice B; Choice C;] // separated by semicolon
        Answer: [Choice A]

    3. Identification - Enter the correct answer

        Question: [The Question]
        Type: Identification
        Answer: [The Answer]

    4. Sequence - Arrange a given sequence

        Question: [The Question]
        Type: Sequence
        Sequence: [Choice A; Choice B; Choice C;] // separated by semicolon
        Answer: [Choice A; Choice B; Choice C;] // separated by semicolon

    */

    // TextArea Watcher
    useEffect(() => {
        // Filter the data based on the current page
        const filteredData = currentQuestionBanksData[questionBankName] || [];
        const formattedData = filteredData.map(item => 
        // `"Question": "${item.Question}"\n"Type": "${item.Type}"\n"Answer": "${item.Answer}"\n`
        // ).join('\n');
        `Question: ${item.Question}\nType: ${item.Type}\nAnswer: ${item.Answer}\n`
        ).join('\n');
        setTextAreaContent(formattedData);
    }, [questionBankName, currentQuestionBanksData]);

    const handleTextAreaChange = (event) => {
        const updatedContent = event.target.value;
        setTextAreaContent(updatedContent);

        // Update the QuestionBanksData with the new content
        try {
        const updatedData = updatedContent.split('\n\n').map(item => {
            const lines = item.split('\n');
            const question = lines[0].split(': ')[1].replace(/"/g, '');
            const type = lines[1].split(': ')[1].replace(/"/g, '');
            const answer = lines[2].split(': ')[1].replace(/"/g, '');
            return { Question: question, Type: type, Answer: answer };
        });
        setQuestionBanksData((prevData) => ({
            ...prevData,
            [questionBankName]: updatedData,
        }));
        } catch (error) {
            // console.error('Invalid format:', error);
            console.log();
        }
    };

    const testButtonClicked = (event) => {
        console.log("Test Button Clicked");
    }

    return (
        <div className="h-screen w-screen flex flex-row items-center justify-center gap-6 p-6">
            {/* <h1 className="text-3xl font-bold" onClick={() => console.log(questionBankName)}>Add Question to {questionBankName}</h1> */}
            {/* Add your form or content here */}

            {/* Input Container */}
            <div className="h-full w-1/2 text-white font-bold text-xl flex flex-col items-center justify-start">

                {/* Back and Upload Button Container */}
                <div className="h-[15%] w-full flex flex-row items-center justify-start gap-6">
                    <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                        <Link to="/" className="w-full h-full flex items-center justify-center">
                            Back
                        </Link>
                    </div>

                    {/* File Upload */}
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full h-20 max-w-xs" />

                    <div className="dropdown dropdown-hover">
                        <div tabIndex={0} role="button" className="btn m-1">Bank</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            {Object.keys(QuestionBanksData).map((quesBankTitle) => (
                                <li key={quesBankTitle}>
                                    <Link to={`/question_banks/${quesBankTitle}/add_question`} className="w-full h-full">
                                        <a className={``}>{quesBankTitle}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition" onClick={() => testButtonClicked()}>
                        Test
                    </div>
                </div>

                {/* Textarea Container */}
                <div className="h-[85%] w-full flex items-center justify-center">
                    <textarea 
                    className="textarea textarea-lg w-full h-full textarea-bordered text-[15px] bg-[#1D232A]" 
                    name="message" 
                    placeholder="Question" 
                    required 
                    style={{ resize: 'none' }}
                    onChange={handleTextAreaChange}
                    value={textAreaContent}
                    ></textarea>
                </div>

            </div>

            {/* Preview Container */}
            <div className="h-full w-1/2 text-white font-bold text-xl flex flex-col items-center justify-start bg-blue-300">

                {/* Toggles Container */}
                <div className="h-[15%] max-h-[15%] w-full flex flex-row items-center justify-start p-3 gap-6 bg-green-300">

                    <div className="dropdown dropdown-hover z-40">
                        <div tabIndex={0} role="button" className="btn m-1">Toggle</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a className="">All</a></li>
                            <li><a className="">Current</a></li>
                            <li><a className="">Added</a></li>
                        </ul>
                    </div>

                </div>

                {/* Preview Container */}
                <div className="h-[75%] w-full flex items-start justify-center overflow-y-auto z-30">

                    {/* Questions List Container */}
                    <div className="w-[60vw] flex items-center justify-center p-3">

                        <div className="min-h-full h-max w-full flex flex-col items-center justify-start gap-6 text-white font-bold text-xl">
                            {QuestionBanksData[questionBankName].map((question, index) => (
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


                {/* Start Now Button Container */}
                <div className="h-[10%] max-h[10%] w-full flex flex-row items-center justify-end pr-3 gap-6 bg-orange-300">

                    {/* Start Button */}
                    <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition">
                        <Link to="/" className="w-full h-full flex items-center justify-center">
                            Start
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}

AddQuestion.propTypes = {
    QuestionBanksData: PropTypes.object.isRequired,
    setQuestionBanksData: PropTypes.func.isRequired
}

export default AddQuestion;