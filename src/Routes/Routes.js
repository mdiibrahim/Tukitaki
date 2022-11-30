import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import UnknownPageError from '../Pages/UnknownPageError/UnknownPageError';
import Error from '../Pages/SharedPages/Error/Error'
import PrivateRoute from './PrivateRoute/PrivateRoute';
import Blog from '../Pages/Blog/Blog';
import AdminRoute from './AdminRoute/AdminRoute';
import AllSellers from '../Pages/Dashboard/Admin/AllSellers/AllSellers';
import AllBuyers from '../Pages/Dashboard/Admin/AllBuyers/AllBuyers';
import ReportedItems from '../Pages/Dashboard/Admin/ReportedItems/ReportedItems';
import SellerRoute from './SellerRoute/SellerRoute';
import MyProducts from '../Pages/Dashboard/Seller/MyProducts/MyProducts';
import AddProduct from '../Pages/Dashboard/Seller/AddProduct/AddProduct';
import BuyerRoute from './BuyerRoute/BuyerRoute';
import MyOrders from '../Pages/Dashboard/Buyer/MyOrders/MyOrders';
import Dashboardlayout from '../Layout/MainLayout/DashboardLayout/DashboardLayout';
import Categories from '../Pages/Categories/Categories';



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
                element: <Blog></Blog>
            },
            {
                path: '/category/:category_name',
                loader: ({ params }) => fetch(`https://tukitakibyrhidy.web.app/category/${params.category_name}`),
                element: <PrivateRoute><Categories></Categories></PrivateRoute>
            },

            {
                path: '/*',
                element: <UnknownPageError></UnknownPageError>
            },


        ]
    },
    {
        path: '/dashboard',
        errorElement: <Error></Error>,
        element: <PrivateRoute>
            <Dashboardlayout></Dashboardlayout>
        </PrivateRoute>,
        children: [
            {
                path: '/dashboard/sellers',
                element: <AdminRoute>
                    <AllSellers></AllSellers>
                </AdminRoute>,
            },
            {
                path: '/dashboard/buyers',
                element: <AdminRoute>
                    <AllBuyers></AllBuyers>
                </AdminRoute>,
            },
            {
                path: '/dashboard/reporteditems',
                element: <AdminRoute>
                    <ReportedItems></ReportedItems>
                </AdminRoute>,
            },
            {
                path: '/dashboard/my-products',
                element: <SellerRoute>
                    <MyProducts></MyProducts>
                </SellerRoute>
            },
            {
                path: '/dashboard/add-product',
                element: <SellerRoute>
                    <AddProduct></AddProduct>
                </SellerRoute>
            },
            {
                path: '/dashboard/my-orders',
                element: <BuyerRoute>
                    <MyOrders></MyOrders>
                </BuyerRoute>
            },
        ]
    },

]);


export default router;