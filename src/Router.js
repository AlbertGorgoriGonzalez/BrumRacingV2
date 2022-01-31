import React from "react";
import Navbar from './components/Navbar/Navbar';
import Home from "./components/Home/HeroSection";
import Register from "./components/Registro/Register";
import Login from "./components/Login/Login";
import ErrorPage from "./components/ErrorPage/Component"
import AboutUs from "./components/AboutUs/Component"
import Footer from "./components/Footer/Component";
import Tutorial from "./components/Tutorial/Component";
import Rankings from "./components/Rankings/Component";

import { BrowserRouter, Routes, Route, NotFoundRoute } from 'react-router-dom';



const RouterWeb = () => {
    return(
      <BrowserRouter>
        <Navbar />
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/about-us' element={<AboutUs/>}/>
                <Route path='/rankings' element={<Rankings/>}/>
                <Route path='/tutorial' element={<Tutorial/>}/>
                <Route path='*' element={<ErrorPage/>} />
            </Routes>
        <Footer/>
      </BrowserRouter>
    );
}

export default RouterWeb