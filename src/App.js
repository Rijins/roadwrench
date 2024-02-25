import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Registration from './Components/Adminpanel/Registration';

import Navbar from './Components/Adminpanel/Navbar';
// import Home from './Components/Adminpanel/Home';



import Home from './test/Home';

import Regview from './Components/Adminpanel/Regview';
import UserSignup from './Components/UserSide/UserSignup';
import UserLogin from './Components/UserSide/UserLogin';
import Userview from './Components/Adminpanel/UserView';
import LandingPage from './Components/UserSide/LandingPage';
import Login from './Components/Adminpanel/Login';
import Search from './Components/UserSide/Search';
import Searcher from './Components/UserSide/Searcher';



function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/reg' element={<Registration method='POST'/>}></Route>
      <Route path='/nav' element={<Navbar/>}></Route>
      <Route path='/view' element={<Regview method='get'/>}></Route>
     <Route path="/login" element={<Login/>} />
        <Route path="/home" element={<Home/>} />
        <Route path='/signup' element={<UserSignup method='POST'/>}></Route>
        <Route path='/userview' element={<Userview method='get'/>}></Route>
       
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/search' element={<Searcher/>}/>

        
        <Route path={'/userlogin'} element={<UserLogin method='post'/>}></Route>
      </Routes>
    </BrowserRouter>




  );
};

export default App;
