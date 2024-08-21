import { useParams } from "react-router-dom";

function AddQuestion() {
    const { questionBankName } = useParams();

    return (
        <div className="h-screen w-screen flex items-center justify-center">
            <h1 className="text-3xl font-bold" onClick={() => console.log(questionBankName)}>Add Question to {questionBankName}</h1>
            {/* Add your form or content here */}
        </div>
    );
}

export default AddQuestion;