import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import { ToastContainer } from "react-toastify"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
      </Routes> 
      <ToastContainer/>
    </BrowserRouter>
  )
}