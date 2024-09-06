import { Navigate, Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

import user_placeholder from "../assets/Default-User.webp"

import PropTypes from 'prop-types';

function MainLayout({toggleDarkMode, darkMode, userEmail}) {

    // Logic to determine whether to navigate to /log_in or /sign_up
    // For example, you can toggle the state based on some condition
    // setNavigateToSignUp(true); // Uncomment this line to navigate to /sign_up

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-200 dark:bg-slate-900 text-black dark:text-white">

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

        <Outlet />
    </div>
  )
}

MainLayout.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
  userEmail: PropTypes.string.isRequired
};

export default MainLayout