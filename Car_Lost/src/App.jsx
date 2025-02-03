import React from 'react';


import Home from './Commponent/Home/Home.jsx';
import About from './Commponent/About/About.jsx';
import Update from './Commponent/Update/Update.jsx';
import Profile from './Commponent/Profile/Profile.jsx';
import Comment from './Commponent/Comment section/Comment.jsx';
import AddCar from './Commponent/AddCar/AddCar.jsx';
import AddGarage from './Commponent/AddGarge/AddGarge.jsx';


import './App.css'
import { Route, Routes } from 'react-router-dom';
import Login from './Commponent/Login/Login.jsx';
import Register from './Commponent/Register/Register.jsx';
import Footer from './Commponent/Footer/Footer.jsx';


function App() {
  

  return (
    <>
       <Routes>
        <Route path='/' element={<About/>} />
        <Route path='/Register' element={<Register/>} />
        <Route path='/Login' element={<Login/>} />
        <Route path='/Myprofile' element={<Profile/>} />
        <Route path='/HomePage' element={<About/>} />
        <Route path='/EditProfile' element={<Register/>} />
        <Route path='/Addcar' element={<AddCar/>} />
        <Route path='/AddGarage' element={<AddGarage/>} />
        <Route path='/Logout' element={<Home/>} />
        
       </Routes>
    </>
  )
}

export default App
