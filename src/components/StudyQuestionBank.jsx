import { useParams } from "react-router-dom";

function StudyQuestionBank() {
    const { questionBankName } = useParams();

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold" onClick={() => console.log(questionBankName)}>Study in {questionBankName}</h1>
            {/* Add your form or content here */}
        </div>
    );
}

export default StudyQuestionBank;