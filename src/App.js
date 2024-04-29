import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import Profile from './pages/Profile';
import GoogleAccount from './pages/GoogleAccount';
import { AuthContextProvider } from './context/AuthContext';

export default function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Routes>
          <Route index path="/" element={<Homepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/signup" element={<SignUp />}></Route>
          <Route path="/profile" element={<Profile />}></Route>
          <Route path="/account" element={<GoogleAccount />}></Route>
        </Routes>
        <ToastContainer />
      </AuthContextProvider>
    </BrowserRouter>
  );
}