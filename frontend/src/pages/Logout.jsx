import {useContext, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';
import {Routes} from "../config.js";

const Logout = () => {
    const {logout} = useContext(AuthContext);
    const navigate = useNavigate();

    useEffect(() => {
        logout();
        navigate(Routes.LOGIN);
    }, [logout, navigate]);

    return null;
};

export default Logout;