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
    console.log(isAdmin, isSeller, isBuyer)
    
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
                    <ul className="menu p-4 w-80 text-primary">
                        
                        {
                            isSeller && <>
                                <li><Link to="/dashboard/allusers">My Products</Link></li>
                                <li><Link to="/dashboard/adddoctor">Add A Product</Link></li>
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
                                <li><Link to="/dashboard/allusers">My Orders</Link></li>
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