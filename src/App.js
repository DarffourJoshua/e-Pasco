import React from 'react';
import './App.css';
import Signup from './Components/Signup';
import Login from './Components/Login';
//import Home from './Components/Home'
//import { Route, Routes } from 'react-router-dom';
//import About from './Components/About';

export default function App(){
    return (
        <main className='App'>
           {/*<Routes>
            <Route path='/' element={<Home />} />
            <Route path='About' element={<About />} />
            </Routes> */}
            <Signup />
            <Login />
        </main>
    );
}
