import { userAuth } from "../context/AuthContext"
import { useNavigate } from "react-router-dom";
const Dashboard = () => {
  const {user} = userAuth();
  const navigate = useNavigate();
  return (
    <div className="bg-black h-screen text-white w-full">
        <div className="max-w-[900px] h-full w-full mx-auto flex
        flex-col items-center justify-center gap-4 text-center px-4
        ">
          <h1 className="md:text-8xl text-4xl font-bold text-green-600">{user ? `Hello ${user.name}!`: 'Hello Developer!'}</h1>
          <p className="md:text-2xl text-lg font-semibold text-green-800">Welcome to the authenticator. This is a MERN stack Project of user authentication.</p>
          {!user && 
          <button className="bg-green-500 text-black rounded-lg hover:opacity-95
            p-3 font-semibold transition-all
          " onClick={() => navigate("/register")}
          >Get Started</button>}
        </div>
    </div>
  )
}
export default Dashboard