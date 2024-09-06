import { signIn } from "../firebase/firebase_config";

import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import PropTypes from 'prop-types';

import { toast } from "react-toastify";

// Logo Imports
import logo_white from "../assets/logo1-transparent.webp";
import logo_black from "../assets/logo1-transparent.webp";


function Login({ darkMode, setUserEmail }) {

  const [logo, setLogo] = useState(logo_white)

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (darkMode) {
            setLogo(logo_white);
        } else {
            setLogo(logo_black);
        }
    }, [darkMode]);


  const submit_func = async (e) => {
      e.preventDefault();

      let data = {}

      // Logging of form details, comment this out after testing
      const form = e.target;
      const formData = new FormData(form);
      for (let [key, value] of formData.entries()) {
          // console.log(`${key}: ${value}`);
          data[key] = value;
      }

      // console.log(data);

      const user = await signIn(data);
      if ("error" in user) {
        toast.error("Wrong email or password", { duration: 2000 });
      } else {
        toast.success("Successfully signed up", { duration: 2000 });

        setUserEmail(data.email)

        // Reset the form
        form.reset();

        // Redirect based on user email
        setTimeout(() => {
          if (data.email === "admin@gmail.com") {
            setIsAdmin(true);
          } else {
            setIsUser(true);
          }
        }, 3000);
      }
  };


  return (
    <>
    
    
        <div className="hero min-h-screen bg-slate-100 dark:bg-blue-950 transition">

          {isUser && <Navigate to="/user" />}

          <div className="hero-content flex-col lg:flex-row">

            {/* Left Content */}
            <div className="text-center lg:text-left pr-[10%] select-none">
              <img src={logo} alt="logo" className="w-48 h-48" />
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white">Login now!</h1>
              <p className="py-6 text-slate-600 dark:text-slate-200">Welcome to <b>Quizzy</b>. We&apos;re excited to have you start your studying practices with us. To get started, please <b>fill out the form</b> below to create your account.</p>
              {/* <p className="py-6 text-slate-600 dark:text-slate-200">Welcome to Maharlika Banking. Our secure online banking platform allows you to manage your accounts, make transactions, and stay updated with your finances anytime, anywhere. Please enter your email and password to log in. If you&apos;re a new user, please register to start enjoying our services. Your financial journey with us is just a few clicks away.</p> */}
            </div>

            {/* Right Content (Form) */}
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 border-opacity-10 border-slate-900 border-2 dark:bg-slate-900 transition">
              <form className="card-body" onSubmit={submit_func}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white font-bold" type="submit">Login</button>
                  <Link to="/sign_up">
                      <p className="py-6 text-center text-slate-800 dark:text-slate-100 transform transition hover:text-blue-800 dark:hover:text-blue-400 hover:scale-105 select-none">No account? Sign-Up!</p>
                  </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
    
    </>
  )
}

Login.propTypes = {
  darkMode: PropTypes.bool,
  setUserEmail: PropTypes.func.isRequired
};

export default Login