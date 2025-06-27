import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Navbar from "./components/Navbar"
import {Router,Routes, Route} from 'react-router-dom'
import Dashboard from "./pages/Dashboard"
const App = () => {
  return (
    <div>
        <Navbar/>
        <Routes>
        <Route path="/" element={<Dashboard/>}/>
        <Route path="/register" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </div>
  )
}
export default App