import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

import PropTypes from 'prop-types';
import { toast } from "react-toastify";

import _ from 'lodash';

function AddQuestion({QuestionBanksData, setQuestionBanksData}) {

    let currentQuestionBankData = QuestionBanksData;

    const [newQuestionBankData, setNewQuestionBankData] = useState({});

    const [currentQuestionBanksData, setCurrentQuestionBanksData] = useState(QuestionBanksData);
    const [tempQuestionBanksData, setTempQuestionBanksData] = useState(JSON.parse(JSON.stringify(QuestionBanksData)));

    const [textAreaContent, setTextAreaContent] = useState("");
    
    const { questionBankName } = useParams();

    const [isChangeMade, setIsChangeMade] = useState(false);

    const [statusText, setStatusText] = useState("No changes made, make sure to Save 😉")

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
        const filteredData = tempQuestionBanksData[questionBankName] || [];
        const formattedData = filteredData.map(item => 
        // `"Question": "${item.Question}"\n"Type": "${item.Type}"\n"Answer": "${item.Answer}"\n`
        // ).join('\n');
        `Question: ${item.Question}\nType: ${item.Type}\nAnswer: ${item.Answer}\n`
        ).join('\n');
        setTextAreaContent(formattedData);

        if (_.isEqual(tempQuestionBanksData, currentQuestionBankData)) {
            setIsChangeMade(false);
            setStatusText("No changes made 😉");
        } else {
            setIsChangeMade(true);
            setStatusText("Changes made, don't forget to Save ✅");
        }

    }, [questionBankName, tempQuestionBanksData, currentQuestionBankData]);

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
        setTempQuestionBanksData((prevData) => ({
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

    // Save Button Function - Saves the changes made, alerts the user if there's an error in formatting
    const saveButtonClicked = (event) => {
        console.log("Save Button Clicked");

        try {
            setQuestionBanksData(tempQuestionBanksData);
            toast.success("Changes Saved !!!");
        } catch (error) {
            console.log("HEHE")
        }
    }

    const [messageInput, setMessageInput] = useState("");

    async function sendPM(event) {
        console.log("ask ai");
        // event.preventDefault();
        // const pmInfo = {
        // receiver_id: Number(selectedReceiverId),
        // receiver_class: "User",
        // body: messageInput,
        // };

        // try {
        // const response = await axios.post(`${API_URL}/messages`, pmInfo, {
        //     headers,
        // });
        // const { data } = response;
        // if (data.data) {
        //     const newMessage = {
        //     body: messageInput,
        //     receiver: receivers.find((r) => r.id === Number(selectedReceiverId)),
        //     sender_id: user.id,
        //     };
        //     setSentMessages([...sentMessages, newMessage]);
        //     setMessageInput("");
        //     resetMessages();
        // } else {
        //     alert("Cannot send message.");
        // }
        // } catch (error) {
        // console.log(error);
        // }
    }



    return (
        <div className="h-screen w-screen flex flex-row items-center justify-center gap-6 p-6">
            {/* <h1 className="text-3xl font-bold" onClick={() => console.log(questionBankName)}>Add Question to {questionBankName}</h1> */}
            {/* Add your form or content here */}

            {/* Input Container */}
            <div className="h-full w-1/2 text-black dark:text-white font-bold text-xl flex flex-col items-center justify-start">

                {/* Back and Upload Button Container */}
                <div className="flex-[15%] h-[15%] w-full flex flex-row items-center justify-start gap-6 animate-fade-down-1s transition">
                    <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                        <Link to="/" className="w-full h-full flex items-center justify-center">
                            Back
                        </Link>
                    </div>

                    {/* Bank Button Dropdown */}
                    <div className="dropdown dropdown-hover h-20 w-1/4">
                        <div tabIndex={0} role="button" className="btn h-full w-full text-black dark:text-white font-bold text-xl bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                            Bank
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu text-black dark:text-white bg-slate-300 dark:bg-slate-800 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white rounded-box z-[1] w-52 p-2 shadow">
                            {Object.keys(QuestionBanksData).map((quesBankTitle) => (
                                <li key={quesBankTitle}>
                                    <Link to={`/question_banks/${quesBankTitle}/add_question`} className="w-full h-full dark-hover:bg-slate-400">
                                        <a className={``}>{quesBankTitle}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Ask AI Button */}
                    {/* <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-teal-500 transition">
                        Ask AI
                    </div> */}

                    {/* File Upload */}
                    <input type="file" className="file-input file-input-accent w-full h-20 max-w-xs  text-black dark:text-white font-bold text-xl bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white" />

                    {/* <div className="w-1/4 h-20 rounded-lg flex items-center justify-center bg-slate-800 hover:bg-violet-800 transition" onClick={() => testButtonClicked()}>
                        Test
                    </div> */}
                </div>

                {/* AI Input Box Container */}
                <div className="flex-[10%] h-[10%] w-full flex flex-row items-center justify-center border-slate-900 animate-fade-down-1s transition">

                    {/* Message Input Container */}
                    <div className="h-full w-full flex flex-row items-center justify-center gap-3">
                    <h1>Ask AI</h1>
                    <form onSubmit={sendPM} className="w-5/6">

                        <div className="flex flex-row w-auto rounded-full bg-slate-200 dark:bg-slate-800 shadow-md border-1 border-slate-900 dark:border-white border-opacity-[15%] dark:border-opacity-[4%]">
                            <input
                            className="flex-[80%] p-2 px-4 bg-slate-300 dark:bg-slate-800 bg-opacity-30 rounded-l-full text-[1rem] font-normal border-none focus:outline-none focus-border-none"
                            type="text"
                            value={messageInput}
                            onChange={(event) => {
                                setMessageInput(event.target.value);
                            }}
                            />
                            <button className="flex-[10%] rounded-r-full bg-slate-300 dark:bg-slate-700 hover:bg-teal-500 transition text-black dark:text-white hover:text-white">Send</button>
                        </div>

                        
                    </form>
                    </div>

                </div>

                {/* Textarea Container */}
                <div className="flex-[75%] h-[75%] w-full flex items-center justify-center animate-fade-up-1s transition">
                    <textarea 
                    className="textarea textarea-lg w-full h-full textarea-bordered text-[15px] bg-slate-300 dark:bg-slate-800 border-slate-900 bg-opacity-25 dark:border-white border-opacity-[15%] dark:border-opacity-[4%]" 
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
            <div className="h-full w-1/2 text-black dark:text-white font-bold text-xl flex flex-col items-center justify-start border-l border-slate-300 dark:border-slate-600 animate-fade-left-1s transition">

                {/* Preview Text and Status Text Container */}
                <div className="h-[15%] max-h-[15%] w-full flex flex-row items-center justify-start p-3 gap-6">

                    {/* Preview Container */}
                    <div className="flex-[50%]">
                        <h1 className="text-4xl">Preview ({questionBankName})</h1>
                    </div>

                    {/* Status Container */}
                    <div className={`flex-[50%] text-[0.9rem] flex items-center justify-end ${isChangeMade ? "text-red-600 dark:text-red-300" : "text-green-600 dark:text-green-300"}`}>
                        {statusText}
                    </div>

                    {/* <div className="dropdown dropdown-hover z-40">
                        <div tabIndex={0} role="button" className="btn m-1">Toggle</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                            <li><a className="">All</a></li>
                            <li><a className="">Current</a></li>
                            <li><a className="">Added</a></li>
                        </ul>
                    </div> */}

                </div>

                {/* Preview Container */}
                <div className="h-[75%] w-full flex items-start justify-center overflow-y-auto z-30">

                    {/* Questions List Container */}
                    <div className="w-[60vw] flex items-center justify-center p-3">

                        <div className="min-h-full h-max w-full flex flex-col items-center justify-start gap-6 text-black dark:text-white font-bold text-xl">
                            {tempQuestionBanksData[questionBankName].map((question, index) => (
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
                            ))}
                        </div>

                    </div>
                </div>


                {/* Start Now Button Container */}
                <div className="h-[10%] max-h[10%] w-full flex flex-row items-center justify-end pr-3 gap-6 text-black dark:text-white">

                    {/* Save Button */}
                    <div className="w-1/4 h-2/3 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white" onClick={() => saveButtonClicked()}>
                        Save
                    </div>

                    {/* Study Now Button */}
                    <div className="w-1/4 h-2/3 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                        <Link to={`/question_banks/study`} className="w-full h-full flex items-center justify-center">
                            Study Now
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