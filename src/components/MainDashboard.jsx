import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faInfinity, faMap, faPlay, faUser } from "@fortawesome/free-solid-svg-icons"

import quizzy_logo from "../assets/logo1-transparent.webp"

import PropTypes from 'prop-types';

function MainDashboard({firstQuestionBank, isLoggedIn}) {
  return (
    <div className="h-screen w-screen bg-slate-200 dark:bg-slate-900 text-black dark:text-white text-4xl font-bold flex items-center justify-center select-none transition">

      {/* App Logo */}
      <div className="absolute top-5 text-[2rem] flex flex-row items-center justify-center gap-3 animate-fade-down-1s transition">
          <div className="w-12">
            <img src={quizzy_logo} className=""/>
          </div>

          {/* <h1 className="text-[1.7rem]">Quizzy</h1> */}
      </div>

      {/* TradeMark */}
      <div className="absolute bottom-3 text-[1rem] font-medium animate-fade-right-2s transition">
          © 2024 Quizzy | by <a href="https://jcdiamante.com" target="_blank" className="hover:text-teal-500 hover:dark:text-teal-400 transition hover:underline">JC Diamante</a>
      </div>

      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {/* Question Banks */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/user/question_banks" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faBook}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Question Banks
            </div>

          </Link>
        </div>
        {/* Add Question */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to={`/user/question_banks/${firstQuestionBank}/add_question`} className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faInfinity}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Add Questions
            </div>

          </Link>
        </div>

        {/* Start now */}
        <div className="row-span-4 flex items-center justify-center w-[20vw] bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-up-1s transition group hover:bg-teal-500 hover:scale-[102%] shadow-xl">
          
          <Link to={`/user/question_banks/study`} className="w-full h-full flex flex-col items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faPlay}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 group-hover:-translate-y-3 transition transform"/>
            </div>

            <div className="transition transform group-hover:text-white">
                Start Now
            </div>

          </Link>

        </div>

        {/* Profile */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-left-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/user/profile" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faUser}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Profile
            </div>

          </Link>
        </div>

        {/* Guide */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-left-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/user/guide" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faMap}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Guide
            </div>

          </Link>
        </div>

      </div>
    </div>
  )
}

MainDashboard.propTypes = {
    firstQuestionBank: PropTypes.string.isRequired,
    isLoggedIn: PropTypes.string.isRequired
}

export default MainDashboard