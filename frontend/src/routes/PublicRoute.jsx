import React, { useEffect, useState } from 'react'
import { Outlet, useNavigate } from 'react-router-dom';
import Loader from '../components/common/Loader';

const PublicRoute = () => {
const [loader, setLoader] = useState(true);
    const navigate = useNavigate();
    let isLogin = sessionStorage.getItem('token');

    useEffect(() => {
        if (isLogin) { navigate('/add'); }
        setLoader(false);
    }, [isLogin, navigate])

    return loader ? <Loader /> : <Outlet />
}

export default PublicRoute
