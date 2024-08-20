import { Outlet } from "react-router-dom"

function MainLayout() {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-slate-900">
        <Outlet />
    </div>
  )
}

export default MainLayout