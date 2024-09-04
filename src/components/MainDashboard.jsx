import { Link } from "react-router-dom";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faBuildingColumns, faInfinity, faMap, faMoneyBillTransfer, faMoneyCheck, faPiggyBank, faPlay, faUser } from "@fortawesome/free-solid-svg-icons"

function MainDashboard() {
  return (
    <div className="h-screen w-screen bg-slate-200 dark:bg-slate-900 text-black dark:text-white text-4xl font-bold flex items-center justify-center select-none transition">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {/* Question Banks */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/question_banks" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faBook}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Question Banks
            </div>

          </Link>
        </div>
        {/* Math Banks */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/question_banks" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faInfinity}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Math Banks
            </div>

          </Link>
        </div>

        {/* Start now */}
        <div className="row-span-4 flex items-center justify-center w-[20vw] bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-up-1s transition group hover:bg-teal-500 hover:scale-[102%] shadow-xl">
          
          <Link to="/question_banks" className="w-full h-full flex flex-col items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faPlay}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 group-hover:-translate-y-3 transition transform"/>
            </div>

            <div className="transition transform group-hover:text-white">
                Start Now
            </div>

          </Link>

        </div>

        {/* Profile */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/question_banks" className="w-full h-full flex items-center justify-center gap-6">
            
            <div>
                <FontAwesomeIcon icon={faUser}  className="h-10 text-slate-900 dark:text-white group-hover:text-white group-hover:scale-110 transition transform"/>
            </div>

            <div className="group-hover:translate-x-3 transition transform group-hover:text-white">
                Profile
            </div>

          </Link>
        </div>

        {/* Guide */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-slate-300 dark:bg-white rounded-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white z-40 animate-fade-right-1s transition group hover:bg-violet-800 hover:scale-[102%] shadow-xl">
          <Link to="/question_banks" className="w-full h-full flex items-center justify-center gap-6">
            
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

export default MainDashboard