import { BrowserRouter,Routes,Route } from "react-router-dom"
import Homepage from "./pages/Homepage"

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<Homepage/>}></Route>
      </Routes> 
    </BrowserRouter>
  )
}