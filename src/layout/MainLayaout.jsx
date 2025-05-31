import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../pages/Shared/NavBar';
import Footer from '../pages/Shared/Footer';

const MainLayaout = () => {
    return (
       <div className=''>
            <header>
                <NavBar></NavBar>
            </header>
            <main className='w-11/12 mx-auto my-10  min-h-[calc(100vh-435px)] '>
                <Outlet></Outlet>
            </main>
            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default MainLayaout;