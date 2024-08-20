import { BrowserRouter, Routes, Route } from "react-router-dom";

// Templates
import MainLayout from "./layouts/MainLayout";

// Components
import Main from "./components/MainDashboard"
import ErrorPage from "./components/ErrorPage";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Main />} />
            {/* <Route path="blogs" element={<Blogs />} /> */}

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
