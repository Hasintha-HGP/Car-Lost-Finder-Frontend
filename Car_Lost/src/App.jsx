import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import Update from './Component/Update/Update.jsx';
import Profile from './Component/Profile/Profile.jsx';
import ProfileDummy from './Component/Profile copy/ProfileDummy.jsx';
import AboutDummy from './Component/About copy/AboutDummy.jsx';
import AddCar from './Component/AddCar/AddCar.jsx';
import AddGarage from './Component/AddGarge/AddGarge.jsx';

import './App.css';

import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';

function App() {
  return (
    
       <Routes>
        <Route path='/Login' element={<Login />} />
        <Route path='/' element={<Home />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/Myprofile' element={<Profile />} />
        <Route path='/HomePage' element={<About />} />
        <Route path='/EditProfile' element={<Update />} />
        <Route path='/Addcar' element={<AddCar />} />
        <Route path='/AddGarage' element={<AddGarage />} />
        <Route path='/Logout' element={<Home />} />
        <Route path='/ProfileDummy' element={<ProfileDummy />} />
        <Route path='/HomePageDummy' element={<AboutDummy/>} />
       </Routes>
  );
}

export default App;
