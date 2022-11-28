import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';

import useSeller from '../../Hooks/useSeller/useSeller';
import Loading from '../../Pages/SharedPages/Loading/Loading';
const SellerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const [isSeller, isSellerLoading] = useSeller(user?.email);
    const location = useLocation();
    if (loading || isSellerLoading) {
        return <Loading></Loading>
    }
    if (!user && !isSeller) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default SellerRoute;