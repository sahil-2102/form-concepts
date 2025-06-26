import Login from "./pages/Login"
import Signup from "./pages/Signup"
import {Routes, Route} from 'react-router-dom'
const App = () => {
  return (
    <div className="h-screen bg-gradient-to-r from-gray-700 to-gray-400 flex items-center justify-center">
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}
export default App