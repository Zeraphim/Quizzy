import { BrowserRouter, Routes, Route } from "react-router-dom";

// Templates
import MainLayout from "./layouts/MainLayout";

// Components
import Main from "./components/MainDashboard"
import QuestionBanks from "./components/QuestionBanks";
import AddQuestion from "./components/AddQuestion";

import ErrorPage from "./components/ErrorPage";



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            <Route path="question_banks" element={<QuestionBanks />} />
            <Route path="question_banks/:questionBankName/add_question" element={<AddQuestion />} />

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
