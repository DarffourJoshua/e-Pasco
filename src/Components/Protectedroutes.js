import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';

const useAuth = () => user.loggedIn;

const Protectedroutes = () => {
    const loc = useLocation();
    const isAuth = useAuth();
    return isAuth ? <Outlet /> : <Navigate to='/' replace state={{from: loc}} />;
}

export default Protectedroutes;