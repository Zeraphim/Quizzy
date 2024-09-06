import { Link } from "react-router-dom"

import PropTypes from 'prop-types';
import { useEffect } from "react";

function Profile({userData}) {

    useEffect(() => {
        console.log(userData);
    }, [userData])

  return (
    <div className="h-screen w-screen flex flex-row items-center justify-center p-20">
        {/* Action Buttons Container */}
        <div className="flex-[30%] h-full w-full flex flex-col items-end justify-start p-10 gap-6 text-black dark:text-white font-bold text-xl bg-slate-300 dark:bg-white rounded-l-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white">

            {/* Back Button */}
            <div className="w-2/4 h-20 rounded-lg flex items-center justify-center bg-slate-300 dark:bg-white hover:bg-violet-800 bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white transition shadow-md hover:text-white">
                <Link to="/user" className="w-full h-full flex items-center justify-center">
                    Back
                </Link>
            </div>

        </div>

        {/* Profile Container */}
        <div className="flex-[70%] h-full w-full flex flex-col gap-10 items-center justify-start p-10 text-wrap overflow-y-auto leading-loose bg-slate-300 dark:bg-white rounded-r-3xl overflow-hidden bg-opacity-30 dark:bg-opacity-10 border-2 border-opacity-[15%] dark:border-opacity-[4%] border-slate-900 dark:border-white">

            {/* About Section */}
            <div className="w-full h-full">
                <h1 className="text-3xl font-bold text-violet-600 dark:text-violet-500 pb-4">Profile</h1>
                <div className="w-full h-auto flex flex-col items-start gap-5 justify-center">
                    
                    <div className="h-full w-full flex flex-row items-start gap-6 justify-start">
                        <div className="text-2xl font-bold">Name:</div>
                        <div className="text-2xl font-semibold">{userData[0].name}</div>
                    </div>

                    <div className="h-full w-full flex flex-row items-start gap-6 justify-start">
                        <div className="text-2xl font-bold">Email:</div>
                        <div className="text-2xl font-semibold">{userData[0].email}</div>
                    </div>

                    <div className="h-full w-full flex flex-row items-start gap-6 justify-start">
                        <div className="text-2xl font-bold">Birthdate:</div>
                        <div className="text-2xl font-semibold">{userData[0].birthdate}</div>
                    </div>

                </div>
            </div>

        </div>
    </div>
  )
}

Profile.propTypes = {
  userData: PropTypes.object.isRequired
};

export default Profile