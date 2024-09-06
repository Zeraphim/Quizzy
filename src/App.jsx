import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./styles/output.css"

// Templates
import MainLayout from "./layouts/MainLayout";

// Components
import Main from "./components/MainDashboard"
import QuestionBanks from "./components/QuestionBanks";
import AddQuestion from "./components/AddQuestion";
import StudyQuestionBank from "./components/StudyQuestionBank";

import ErrorPage from "./components/ErrorPage";

// Data Import
import question_banks_data from "./data/quizzes_temp.json"
import { useEffect, useState } from "react";

// Toastify Stylings
import 'react-toastify/dist/ReactToastify.css';
import Guide from "./components/Guide";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserLayout from "./layouts/UserLayout";
import Profile from "./components/Profile";

// Firebase Imports
import { getSpecificUserData } from "./firebase/firebase_config";

function App() {
  const [questionBanksData, setQuestionBanksData] = useState(question_banks_data);
  const [firstQuestionBank, setFirstQuestionBank] = useState(Object.keys(questionBanksData)[0])

  // Updates the firstQuestionBank state whenever questionBanksData state is changed
  useEffect(() => {
    setFirstQuestionBank(Object.keys(questionBanksData)[0]);
  }, [questionBanksData])

  const [answeredQuestionBanks, setAnsweredQuestionBanks] = useState({});

  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    // console.log(darkMode)
  };

  const [userEmail, setUserEmail] = useState(null);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      const data = await getSpecificUserData(userEmail);
      setUserData(data);
    };

    fetchUserData();
  }, [userEmail]);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Login setUserEmail={setUserEmail}/>} />
            <Route path="log_in" element={<Login setUserEmail={setUserEmail}/>} />
            <Route path="sign_up" element={<SignUp setUserEmail={setUserEmail}/>} />

            {/* User Route */}
            <Route path="user" element={<UserLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode} userEmail={userEmail} />}>
              <Route index element={<Main firstQuestionBank={firstQuestionBank} />} />
              <Route path="question_banks" element={<QuestionBanks QuestionBanksData={questionBanksData} firstQuestionBank={firstQuestionBank} setQuestionBanksData={setQuestionBanksData} />} />
              <Route path="question_banks/:questionBankName/add_question" element={<AddQuestion QuestionBanksData={questionBanksData} setQuestionBanksData={setQuestionBanksData} />} />
              <Route path="question_banks/study" element={<StudyQuestionBank QuestionBanksData={questionBanksData} firstQuestionBank={firstQuestionBank} answeredQuestionBanks={answeredQuestionBanks} setAnsweredQuestionBanks={setAnsweredQuestionBanks} />} />
              <Route path="guide" element={<Guide />} />
              <Route path="profile" element={<Profile userData={userData}/>} />
            </Route>

            {/* <Route path="dashboard" element={<DashboardTemplate />} >
              <Route index element={<Admin />} />
              <Route path="admin" element={<Admin />} />
              <Route path="users" element={<Users />} />
              <Route path="others" element={<Others />} />
              <Route path="Profile" element={<Profile />} />
            </Route> */}

            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
