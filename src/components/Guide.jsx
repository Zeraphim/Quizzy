import { useState } from "react"
import { Link } from "react-router-dom"

function Guide() {

  const [toggle, setToggle] = useState("all");

  return (
    <div className="h-screen w-screen flex flex-row items-center justify-center p-20">
        {/* Action Buttons Container */}
        <div className="flex-[30%] h-full w-full flex flex-col items-end justify-start p-10 gap-6 text-black dark:text-white font-bold text-xl bg-red-300">

            {/* Back Button */}
            <div className="w-2/4 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                <Link to="/" className="w-full h-full flex items-center justify-center">
                    Back
                </Link>
            </div>

            {/* Bank Button Dropdown */}
            <div className="dropdown dropdown-hover h-20 w-2/4">
                <div tabIndex={0} role="button" className="btn h-full w-full text-black dark:text-white font-bold text-xl bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                    Toggle
                </div>
                <ul tabIndex={0} className="dropdown-content menu text-black dark:text-white bg-slate-300 dark:bg-slate-800 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white rounded-box z-[1] w-52 p-2 shadow">
                    <li>
                        <a className="w-full h-full dark-hover:bg-slate-400" onClick={() => setToggle("all")}>All</a>
                    </li>
                    <li>
                        <a className="w-full h-full dark-hover:bg-slate-400" onClick={() => setToggle("about")}>About</a>
                    </li>
                    <li>
                        <a className="w-full h-full dark-hover:bg-slate-400" onClick={() => setToggle("question_banks")}>Question Banks</a>
                    </li>
                    <li>
                        <a className="w-full h-full dark-hover:bg-slate-400" onClick={() => setToggle("adding")}>Adding</a>
                    </li>
                    <li>
                        <a className="w-full h-full dark-hover:bg-slate-400" onClick={() => setToggle("studying")}>Studying</a>
                    </li>
                </ul>
            </div>

        </div>

        {/* How to Use Container */}
        <div className="flex-[70%] h-full w-full flex flex-col gap-10 items-center justify-start p-10 text-wrap overflow-y-auto leading-loose bg-blue-300">

            {/* About Section */}
            <div>
                <h1 className="text-3xl font-bold text-violet-600 pb-4">About</h1>
                <p className=" text-xl font-md">
                    Quizzy is a React-based web application that allows users to create question banks and quiz themselves. The application leverages AI to generate questions from uploaded document files, making it easier for users to create comprehensive quizzes.
                    <br></br><br></br>
                    In Quizzy:<br></br>
                    - Users can create their own question banks<br></br>
                    - Users can add questions to question banks<br></br>
                    - Users can study question banks<br></br>
                    - Users can quiz themselves<br></br>
                    - Users can upload document files, and AI will generate questions from the content of documents.<br></br>
                    - A clean and user-friendly interface helps users manage quizzes and question banks.<br></br>
                    - Light and Dark mode tailored for a variety of users.
                </p>
            </div>

            {/* Question Banks Section */}
            <div>
                <h1 className="text-3xl font-bold text-violet-600">Question Banks</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!
                </p>
            </div>

            {/* Adding Questions Section */}
            <div>
                <h1 className="text-3xl font-bold text-violet-600">Adding Questions</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!
                </p>
            </div>

            {/* Studying */}
            <div>
                <h1 className="text-3xl font-bold text-violet-600">Studying</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!

                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta fugit velit repudiandae beatae perferendis optio molestiae quasi dolores blanditiis, quidem ipsum? Labore iure perspiciatis consequuntur corrupti deleniti hic, exercitationem facere!
                </p>
            </div>

        </div>
    </div>
  )
}

export default Guide