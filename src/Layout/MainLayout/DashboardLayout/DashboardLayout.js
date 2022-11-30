import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import useAdmin from '../../../Hooks/useAdmin/useAdmin';
import useBuyer from '../../../Hooks/useBuyer/useBuyer';
import useSeller from '../../../Hooks/useSeller/useSeller';
import Footer from '../../../Pages/SharedPages/Footer/Footer';
import Header from '../../../Pages/SharedPages/Header/Header';

const Dashboardlayout = () => {
    const { user } = useContext(AuthContext);

    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    return (
        <div>
            <Header></Header>
            <div className='grid lg:grid-cols-4 grid-cols-1 gap-6 mt-16'>
                <ul className="menu p-4 w-full direction-row  text-primary lg:col-span-1 lg:direction-col bg-accent lg:bg-base-100  mt-9 rounded-lg">

                    {
                        isSeller && <>
                            <li><Link to="/dashboard/my-products">My Products</Link></li>
                            <li><Link to="/dashboard/add-product">Add A Product</Link></li>
                        </>
                    }
                    {
                        isAdmin && <>
                            <li><Link to="/dashboard/sellers">All Sellers</Link></li>
                            <li><Link to="/dashboard/buyers">All Buyers</Link></li>
                            <li><Link to="/dashboard/reporteditems">Reported Items</Link></li>
                        </>
                    }



                    {
                        isBuyer && <>
                            <li><Link to="/dashboard/my-orders">My Orders</Link></li>
                        </>
                    }




                </ul>
                <div className='lg:col-span-3 w-full'>
                    <Outlet></Outlet>
                </div >
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboardlayout;