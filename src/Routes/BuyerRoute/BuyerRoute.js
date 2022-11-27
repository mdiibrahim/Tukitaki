import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import AuthContext from '../../AuthProvider/AuthProvider'
const BuyerRoute = ({children}) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    if (loading) {
        return <div className='flex items-center justify-center my-20'>
            <button className="btn btn-primary loading "></button>
        </div>
    }
    if (!user) {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
    }
    return children;
};

export default BuyerRoute;