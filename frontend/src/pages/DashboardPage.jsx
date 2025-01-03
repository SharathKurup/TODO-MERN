import React, { useContext, useState } from 'react';
import useAuth from '../hooks/useAuth';

const DashboardPage = () => {
    const {user} = useAuth();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    return (
        <div className="min-h-screen bg-blue-100">
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
            <main className="p-4">
                <section className="mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Task Statistics</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div className="bg-blue-200 p-4 rounded-lg">Total Tasks: 10</div>
                            <div className="bg-blue-200 p-4 rounded-lg">Completed: 6</div>
                            <div className="bg-blue-200 p-4 rounded-lg">Pending: 4</div>
                            <div className="bg-blue-200 p-4 rounded-lg">Overdue: 0</div>
                        </div>
                    </div>
                </section>
                <section className="mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
                        <ul>
                            <li>Task 1: Edited 2 hrs ago</li>
                            <li>Task 2: Marked as completed</li>
                        </ul>
                    </div>
                </section>
                <section className="mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                        <div className="flex space-x-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">View All Tasks</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Add New Task</button>
                            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Manage Profile</button>
                        </div>
                    </div>
                </section>
                <section className="mb-4">
                    <div className="bg-white p-4 rounded-lg shadow-md">
                        <h2 className="text-xl font-bold mb-2">Task Status Distribution</h2>
                        <div className="bg-blue-200 p-4 rounded-lg">Pie Chart Placeholder</div>
                    </div>
                </section>
            </main>
        </div>
    );
};

export default DashboardPage;