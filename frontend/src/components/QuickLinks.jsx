import React from 'react';
import {useNavigate} from 'react-router-dom';
import {Routes} from '../config.js';

const QuickLinks = () => {
    const navigate = useNavigate();

    const handleViewAllTasks = () => {
        navigate(Routes.TASK_LIST);
    };

    const handleAddNewTask = () => {
        navigate(Routes.TASK_CREATE);
    };

    return (
        <section className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Quick Links</h2>
                <div className="flex space-x-4">
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleViewAllTasks}>View
                        All Tasks
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg" onClick={handleAddNewTask}>Add New
                        Task
                    </button>
                    <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Manage Profile</button>
                </div>
            </div>
        </section>
    );
};

export default QuickLinks;