import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../../Pages/SharedPages/Header/Header'
import Footer from '../../Pages/SharedPages/Footer/Footer'

const MainLayout = () => {
    return (
        <div>
            
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;