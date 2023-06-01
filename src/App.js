import React from 'react';
import './App.css';
import Account from './Components/Account';
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
           <Account />
        </main>
    );
}
