import { BrowserRouter, Routes, Route } from "react-router-dom";

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
import { useState } from "react";

// Toastify Stylings
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [questionBanksData, setQuestionBanksData] = useState(question_banks_data);


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


  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout toggleDarkMode={toggleDarkMode} darkMode={darkMode}/>}>
            <Route index element={<Main />} />
            <Route path="question_banks" element={<QuestionBanks QuestionBanksData={questionBanksData} />} />
            <Route path="question_banks/:questionBankName/add_question" element={<AddQuestion QuestionBanksData={questionBanksData} setQuestionBanksData={setQuestionBanksData}/>} />
            <Route path="question_banks/:questionBankName/study" element={<StudyQuestionBank />} />

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
