import { Link } from "react-router-dom";

function MainDashboard() {
  return (
    <div className="h-screen w-screen text-white text-4xl font-bold flex items-center justify-center">
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {/* Question Banks */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] backdrop-blur-sm gap-6 bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">
          <Link to="/question_banks" className="w-full h-full flex items-center justify-center">
            Question Banks
          </Link>
        </div>
        {/* Math Banks */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">Math Banks</div>
        {/* Start now */}
        <div className="row-span-4 flex items-center justify-center w-[20vw] bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">Study Now</div>
        {/* Profile */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">Profile</div>
        {/* Analytics */}
        <div className="col-span-2 row-span-2 flex items-center justify-center w-[35vw] h-[40vh] bg-white rounded-3xl overflow-hidden bg-opacity-10 border-2 border-opacity-[4%] border-white z-40">Analytics</div>
      </div>
    </div>
  )
}

export default MainDashboard