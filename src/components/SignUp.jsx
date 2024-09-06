import { signup } from "../firebase/firebase_config";

import { Link, Navigate } from "react-router-dom";

import { useEffect, useState } from "react";
import PropTypes from 'prop-types';

import { toast } from "react-toastify";

// Logo Imports
import logo_white from "../assets/logo1-transparent.webp";
import logo_black from "../assets/logo1-transparent.webp";


function SignUp({ darkMode, setUserEmail }) {

  // Variables to limit the datepicker to only pick dates before today (current date)
  const today = new Date();
  const dateString = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

  const [logo, setLogo] = useState(logo_white)

  const [isUser, setIsUser] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  function changeFilterValue(value) {
      // Create a new style element
      const style = document.createElement('style');

      // Set the CSS text
      style.textContent = `
          ::-webkit-calendar-picker-indicator {
              filter: invert(${value});
          }
      `;

      // Append the style element to the document head
      document.head.append(style);
  }

  useEffect(() => {
      if (darkMode) {
          setLogo(logo_white);
          changeFilterValue(0);
      } else {
          setLogo(logo_black);
          changeFilterValue(1);
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

      // Check if password doesn't match
      if (data.password !== data.confirm_password) {
        toast.error("Passwords do not match", { duration: 2000 });
        return;
        
      // Signing Up
      } else {
        try {
          const user = await signup(data);


          console.log(user);
          toast.success("Successfully signed up", { duration: 2000 })

          setUserEmail(data.email)

          // Reset the form
          form.reset();

          // Redirect based on user name, delay for 3 seconds to upload the data properly
          setTimeout(() => {
            if (data.email === "admin@gmail.com") {
              setIsAdmin(true);
            } else {
              setIsUser(true);
            }
          }, 3000);

        } catch (error) {
          toast.error(`Error signing up: ${error}`, { duration: 2000 })
        }
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
              <h1 className="text-5xl font-bold text-slate-900 dark:text-white">Sign Up!</h1>
              <p className="py-6 text-slate-600 dark:text-slate-200">Welcome to <b>Quizzy</b>. We&apos;re excited to have you start your studying practices with us. To get started, please <b>fill out the form</b> below to create your account.</p>
              {/* <p className="py-6 text-slate-600 dark:text-slate-200">Welcome to Maharlika Banking. We&apos;re excited to have you start your financial journey with us. Our secure online banking platform offers a wide range of services designed to help you manage your finances effectively and efficiently. To get started, please fill out the form below to create your account. Your path to better financial management is just a few clicks away.</p> */}
            </div>

            {/* Right Content (Form) */}
            <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-slate-200 border-opacity-10 border-slate-900 border-2 dark:bg-slate-900 transition">
              <form className="card-body" onSubmit={submit_func}>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Name</span>
                  </label>
                  <input type="text" placeholder="Name" name="name" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Email</span>
                  </label>
                  <input type="email" placeholder="email" name="email" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Birthdate</span>
                  </label>
                  <input type="date" placeholder="birthdate" name="birthdate" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" max={dateString} required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Password</span>
                  </label>
                  <input type="password" placeholder="password" name="password" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text text-slate-800 dark:text-slate-100 transition">Confirm Password</span>
                  </label>
                  <input type="password" placeholder="confirm password" name="confirm_password" className="input input-bordered text-slate-800 dark:text-slate-100 border-2 border-slate-900 border-opacity-20 bg-slate-100 dark:bg-slate-800 transition" required />
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary text-white font-bold" type="submit">Sign Up</button>
                  <Link to="/">
                      <p className="py-6 text-center text-slate-800 dark:text-slate-100 transform transition hover:text-blue-800 dark:hover:text-blue-400 hover:scale-105 select-none">Already have an account?</p>
                  </Link>
                </div>
              </form>
            </div>

          </div>
        </div>
    
    </>
  )
}

SignUp.propTypes = {
  darkMode: PropTypes.bool,
  setUserEmail: PropTypes.func.isRequired
};

export default SignUp