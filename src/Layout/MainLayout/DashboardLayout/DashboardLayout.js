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
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 text-base-content">
                        <li><Link to="/dashboard">My Appointments</Link></li>
                        {
                            isAdmin && <>
                                <li><Link to="/dashboard/allusers">All Sellers</Link></li>
                                <li><Link to="/dashboard/adddoctor">All Buyers</Link></li>
                                <li><Link to="/dashboard/managedoctors">Reported Items</Link></li>
                            </>
                        }
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/allusers">All Sellers</Link></li>
                                <li><Link to="/dashboard/adddoctor">All Buyers</Link></li>
                                <li><Link to="/dashboard/managedoctors">Reported Items</Link></li>
                            </>
                        }
                        {
                            isBuyer && <>
                                <li><Link to="/dashboard/allusers">All Sellers</Link></li>
                                <li><Link to="/dashboard/adddoctor">All Buyers</Link></li>
                                <li><Link to="/dashboard/managedoctors">Reported Items</Link></li>
                            </>
                        }

                    </ul>

                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Dashboardlayout;