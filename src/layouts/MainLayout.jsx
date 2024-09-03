import { Outlet } from "react-router-dom"
import { ToastContainer } from "react-toastify"

function MainLayout() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
        
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

export default MainLayout