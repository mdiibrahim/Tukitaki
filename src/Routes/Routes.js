import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import UnknownPageError from '../Pages/UnknownPageError/UnknownPageError';
import Error from '../Pages/SharedPages/Error/Error'
import PrivateRoute from './PrivateRoute/PrivateRoute';


    const router = createBrowserRouter([
        {
            path: '/',
            errorElement: <Error></Error>,
            element: <MainLayout></MainLayout>,
            children: [
                {
                    path: '/',
                    element: <Home></Home>,
                },
                {
                    path: '/login',
                    element: <Login></Login>,
                },
                {
                    path: '/register',
                    element: <Register></Register>,
                },
                {
                    path: '/blog',
                    
                },
                {
                    path: '/*',
                    element: <UnknownPageError></UnknownPageError>
                },
                
            ] 
        },
        {
            path: '/dashboard',
            element: <PrivateRoute></PrivateRoute>
        },
    ]);
    

export default router;