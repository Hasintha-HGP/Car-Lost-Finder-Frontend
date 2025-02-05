import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from './Component/Home/Home.jsx';
import About from './Component/About/About.jsx';
import FormPage from './Component/FormPage/FormPage.jsx';
import Profile from './Component/Profile/Profile.jsx';
import Comment from './Component/Comment section/Comment.jsx';
import AddCar from './Component/AddCar/AddCar.jsx';
import AddGarage from './Component/AddGarge/AddGarge.jsx';

import './App.css'
import Login from './Component/Login/Login.jsx';
import Register from './Component/Register/Register.jsx';
import Footer from './Component/Footer/Footer.jsx';


function App() {
  return (
    
       <Routes>
        <Route path='/' element={<Profile/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Myprofile' element={<Profile/>} />
        <Route path='/HomePage' element={<About/>} />
        <Route path='/EditProfile' element={<Register/>} />
        <Route path='/Addcar' element={<AddCar/>} />
        <Route path='/AddGarage' element={<AddGarage/>} />
        <Route path='/CarStatus' element={<FormPage/>}/>
        <Route path='/Logout' element={<Home/>} />
        
       </Routes>
  );
}

export default App;
