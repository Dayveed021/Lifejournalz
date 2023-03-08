import SignIn from './component/Pages/SignIn';
import './App.scss';
import SignUp from './component/Pages/SignUp';
import { Route, Routes } from "react-router-dom";
import ResetPassword from './component/Pages/ResetPassword';
import LandingPage from './component/Pages/LandingPage';
import Pricing from './component/Pages/Pricing';
import About from './component/Pages/About';
import Terms from './component/Pages/Terms';
import PrivacyPolicy from './component/PrivacyPolicy';
import Sidebar from './component/Pages/Sidebar';
import ContactUs from './component/Pages/ContactUs';
import Dashboard from './component/Pages/Dashboard';
import { Home } from './component/Pages/DashPages/Home';
import { Categories } from './component/Pages/DashPages/Categories';
import { Setting } from './component/Pages/DashPages/Setting';
import { Favourite } from './component/Pages/DashPages/Favourite';
import { Calendar } from 'react-calendar';
import { Shared } from './component/Pages/DashPages/Shared';
import { Recent } from './component/Pages/DashPages/Recent';
import { Storage } from './component/Pages/DashPages/Storage';
import { Navigate } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/about' element={<About />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<PrivacyPolicy />} />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/contactus' element={<ContactUs />} />
        <Route path='/sidebar' element={<Sidebar />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/reset' element={<ResetPassword />} />
        <Route path='/dashboard/*' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App;
