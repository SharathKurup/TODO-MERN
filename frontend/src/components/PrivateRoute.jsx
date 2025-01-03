import react from 'react';
import {Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';
import {Routes} from "../config.js";

const PrivateRoute = ({children}) => {
    const token = useAuth();
    console.log(token);
    return token ? children : <Navigate to={Routes.LOGIN}/>;
};

export default PrivateRoute;