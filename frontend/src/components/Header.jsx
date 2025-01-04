import React, {useState} from 'react';

const Header = ({user}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
            <div className="text-xl font-bold">
                ToDo App
            </div>
            <div className="flex items-center">
                <span className="mr-4">Hello, {user?.username || 'User'}!</span>
                <div className="relative">
                    <button onClick={toggleDropdown} className="focus:outline-none">Profile</button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1">
                            <a href="/settings" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Settings</a>
                            <a href="/logout" className="block px-4 py-2 text-gray-800 hover:bg-gray-100">Logout</a>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

export default Header;