import { Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import user_placeholder from "../assets/Default-User.webp"

import PropTypes from 'prop-types';

function UserLayout({toggleDarkMode, darkMode, userEmail}) {

    // Logic to determine whether to navigate to /log_in or /sign_up
    // For example, you can toggle the state based on some condition
    // setNavigateToSignUp(true); // Uncomment this line to navigate to /sign_up

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-200 dark:bg-slate-900 text-black dark:text-white">


      {/* If no user signed in, return to login */}
      {userEmail === null && <Navigate to="/log_in" />}

          {/* Toast Message */}
          <ToastContainer
              position="top-right"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
          />

          {/* Profile and Theme Controller Container */}
            <div className="absolute top-7 right-8 flex flex-row items-center justify-center gap-7 animate-fade-down-2s">

              {/* Theme Controller */}
              <label className="flex cursor-pointer gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <circle cx="12" cy="12" r="5" />
                      <path
                        d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
                    </svg>
                  <input type="checkbox" value="dark" className="toggle theme-controller" onClick={toggleDarkMode} checked={darkMode}/>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                    </svg>
              </label>

              {/* Avatar */}
              <div className="avatar flex flex-row items-center justify-center gap-5">
                <div className="mask mask-squircle w-10 hover:scale-105">
                  <img src={user_placeholder} className="shadow-2xl"/>
                </div>

                <h1>{userEmail}</h1>
              </div>

            </div>

        <Outlet />
    </div>
  )
}

UserLayout.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired
};

export default UserLayout