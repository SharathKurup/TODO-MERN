import React, {useState} from 'react';
import {Routes} from "../config.js";
import {useNavigate} from 'react-router-dom';

const Header = ({user}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                <div className="text-xl font-bold cursor-pointer" onClick={() => navigate(Routes.DASHBOARD)}>ToDo App
                </div>
            </div>
            <div className="flex items-center">
                <span className="mr-4">Hello, {user?.username || 'User'}!</span>
                <div className="relative">
                    <button onClick={toggleDropdown} className="focus:outline-none">Profile</button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                            <a href={Routes.DASHBOARD}
                               className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                            <a href={Routes.LOGOUT}
                               className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;