import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import Profile from './pages/Profile';
import GoogleAccount from './pages/GoogleAccount';
import { AuthContextProvider } from './context/AuthContext';
import Protected from './components/HomepageComponents/Protected';
import Sidebar from './components/DashboardComponents/Sidebar';
import Dashboard from './pages/Dashboard';
import WalletPage from './pages/WalletPage';
import ContractPage from './pages/ContractPage';
import DealsPage from './pages/DealsPage';
import NewContract from './pages/NewContract';
import AnalyticsPage from './pages/AnalyticsPage';
import Settings from './pages/SettingPage';
import GetHelpPage from './pages/GetHelpPage';
import Chat from './pages/Chat';
import { useState } from 'react';

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };
  return (
    <BrowserRouter>
      <div>
        <AuthContextProvider>
          <Routes>
            <Route index path="/" element={<Homepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/signup" element={<SignUp />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route
              path="/account"
              element={
                <Protected>
                  <GoogleAccount />
                </Protected>
              }
            ></Route>
          </Routes>
          <ToastContainer />
        </AuthContextProvider>
      </div>
      <div className={`${darkMode && 'dark'}`}>
        <div className="w-screen flex flow-row overflow-hidden">
          <div className="">
            <Sidebar />
          </div>
          <div className=" w-full lg:ml-[22.2rem] md:ml-[14.4rem]">
            <Routes>
              <Route
                path="/dashboard"
                element={<Dashboard toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/wallet"
                element={<WalletPage toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/activities/contracts"
                element={<ContractPage toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/activities/deals"
                element={<DealsPage toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/activities/contracts/newContract"
                element={<NewContract toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/analytics"
                element={<AnalyticsPage toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/settings"
                element={<Settings toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/gethelp"
                element={<GetHelpPage toggleDarkMode={toggleDarkMode} />}
              />
              <Route
                path="/chat"
                element={<Chat toggleDarkMode={toggleDarkMode} />}
              />
            </Routes>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}
