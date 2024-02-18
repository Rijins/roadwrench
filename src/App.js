import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Adminlogin from './Components/Adminpanel/Adminlogin';
import Registration from './Components/Adminpanel/Registration';

import Navbar from './Components/Adminpanel/Navbar';
// import Home from './Components/Adminpanel/Home';
import Userlogin from './Components/Frondpages/Userlogin';
import Userenquiry from './Components/Frondpages/Userenquiry';
import Userreg from './Components/Frondpages/Userreg';
import LandingPage from './Components/Frondpages/LandingPage';
import Login from './test/Login';
import Signup from './test/Signup';
import Home from './test/Home';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path='/' element={<Home/>}></Route>
      <Route path='/reg' element={<Registration/>}></Route>
      <Route path='/adminlogin' element={<Adminlogin />}></Route> */}
      <Route path='/nav' element={<Navbar/>}></Route>
    

        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home/>} />
      </Routes>
    </BrowserRouter>




  );
};

export default App;
