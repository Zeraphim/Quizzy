import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

function AddQuestion() {

    const [textAreaContent, setTextAreaContent] = useState("");

    const { questionBankName } = useParams();

    useEffect(() => {
        console.log(textAreaContent)
    }, [textAreaContent])

    const handleTextAreaContentChange = (event) => {
        setTextAreaContent(event.target.value);
    };

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
                    <input type="file" className="file-input file-input-bordered file-input-accent w-full h-20 max-w-xs" />
                </div>

                {/* Textarea Container */}
                <div className="h-[85%] w-full flex items-center justify-center">
                    <textarea 
                    className="textarea textarea-lg w-full h-full textarea-bordered text-[15px] bg-[#1D232A]" 
                    name="message" 
                    placeholder="Question" 
                    required 
                    style={{ resize: 'none' }}
                    onChange={handleTextAreaContentChange}
                    ></textarea>
                </div>
            </div>

            {/* Preview Container */}
            <div className="h-full w-1/2 bg-blue-300">

            </div>
        </div>
    );
}

export default AddQuestion;