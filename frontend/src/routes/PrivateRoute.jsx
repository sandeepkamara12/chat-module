import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';
const PrivateRoute = () => {
    let navigate = useNavigate();
    const isLogin = sessionStorage.getItem('token');
    // let Cmp = props.Cmp;
    const [loader, setLoader] = useState(true);
    useEffect(() => {
        if (!isLogin) {
            navigate('/register');
        }
        setLoader(false);
    }, [isLogin, navigate]);

    return loader ? <Loader /> : <Outlet />
}

export default PrivateRoute
