import react from 'react';
import {Navigate} from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({children}) => {
    const token = useAuth();
    console.log(token);
    return token ? children : <Navigate to="/"/>;
};

export default PrivateRoute;