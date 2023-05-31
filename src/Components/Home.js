import React from 'react';
//import {Route, Routes }from 'react-router-dom';
//import About from './About';
import {list} from './Courses';
import Header from './Header';
import Navbar from './Navbar';
import Footer from './Footer';


export default function Home() {
        const myDepartment = () =>
                list.sort((a, b) => a - b)
                    .map(cousre => {
                        return (
                                <li key={cousre.id} className='department-list'>
                                    <a
                                     href='/#'
                                     className='home-a'
                                    >
                                        {cousre.department}
                                    </a>
                                </li>
                        )
                    });
        return (
           <>
                <Header />
                { /*<Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About/>} />
                </Routes> */}
                <Navbar />
                <main>
                    <h3>Choose your department</h3>
                    {myDepartment()}
                </main>
                <Footer />
           </>
        );
}