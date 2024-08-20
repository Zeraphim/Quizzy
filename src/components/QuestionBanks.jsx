import question_banks_data from "../data/quizzes_temp.json"

function QuestionBanks() {
  return (
    <div className="h-screen max-h-screen w-screen flex flex-row items-center justify-center p-9 gap-6">
        {/* Question Banks List Container */}
        <div className="h-full w-[20vw] p-8 gap-6 flex flex-col items-center justify-start bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">

            <h1 className="text-white font-bold text-3xl">Question Banks</h1>

            {/* Question Banks List */}
            <div className="h-[90%] max-h-[90%] w-full flex flex-col items-center justify-start gap-4">

                {Object.keys(question_banks_data).map((quesBankTitle) => (
                    <div key={quesBankTitle} className="w-full h-[5vh] bg-green-300 font-semibold text-2xl  flex items-center justify-center">
                        {quesBankTitle}
                    </div>
                ))}

            </div>
            
        </div>
        <div className="h-full w-[60vw] bg-blue-300">2</div>
        <div className="h-full w-[20vw] bg-orange-300">3</div>
    </div>
  )
}

export default QuestionBanks