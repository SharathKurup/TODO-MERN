import React, {useContext, useState} from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import axios from 'axios';
import {AuthContext} from '../contexts/AuthContext';
import {API, Routes} from '../config';

const LoginPage = () => {
    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [token, setToken] = useState(null);
    const [error, setError] = useState(null);
    const {login} = useContext(AuthContext);
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        axios.post(API.LOGIN_URL, {username, password}).then(response => {
            setToken(response.data.token);
            login(response.data.token);
            setLoading(false);
            setError(null);
            //navigate('/task/list');
            navigate(Routes.DASHBOARD);
        }).catch(error => {
            if (error.response && error.response.status === 401) {
                console.log('Unauthorized: Invalid username or password.');
                setError('Unauthorized: Invalid username or password.');
            } else {
                console.log(error);
                setError('An error occurred. Please try again.');
            }
            setLoading(false);
        });
    }
    const handleSignup = () => {
        navigate('/signup');
    }
    return (
        <div className="flex items-center justify-center min-h-screen bg-blue-100">
            <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
                <h1 className="text-2xl font-bold mb-6 text-center text-blue-600">Login</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="block text-blue-600 mb-2" htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-blue-600 mb-2" htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <div className="text-red-500 text-center mb-4">{error}</div>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600"
                            disabled={loading}>
                        {loading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <button onClick={handleSignup}
                        className="w-full bg-gray-500 text-white py-2 rounded-lg hover:bg-gray-600 mt-4">
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default LoginPage;