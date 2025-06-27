import { userAuth } from "../context/AuthContext"
import { Link, Navigate, useNavigate } from "react-router-dom"
const Navbar = () => {
  const {user, logout} = userAuth();
  const navigate = useNavigate();
  return (
    <div className="w-full bg-gradient-to-t from-gray-800 to-gray-900">
        <div className="p-4 max-w-[950px] w-full mx-auto
          flex items-center justify-between
        ">
          <h2 className="text-green-700 text-xl md:text-2xl font-bold">
            <Link to="/" >Authenticator</Link>
          </h2>
          <div className="text-white text-xl
            bg-black py-1 px-3 rounded-full hover:text-black hover:bg-white transition-all
          hover:cursor-pointer"

          >
            {user ? (
              <button className=" flex items-center gap-2"
              onClick={logout}
              >
                <span className="font-semibold">Logout</span>
                <i className="fa-solid fa-door-closed"></i>
              </button>
            ): (
              <button className=" flex items-center gap-2"
                onClick={() => {navigate("/login")}}
              >
                <span className="font-semibold">Login</span>
                <i className="fa-solid fa-door-open"></i>
              </button>
            )}
          </div>
        </div>
    </div>
  )
}
export default Navbar