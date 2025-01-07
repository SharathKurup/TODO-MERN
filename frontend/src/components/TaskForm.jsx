import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {API} from '../config.js';
import useAuth from '../hooks/useAuth.js';

const TaskForm = ({task, onSave, onClear}) => {
    const {user} = useAuth();
    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: 'pending',
        dueDate: '',
        priority: 'medium',
        assignedTo: ''
    });
    const [users, setUsers] = useState([]);

    useEffect(() => {
        if (task) {
            setFormData({
                ...task,
                assignedTo: task.assignedTo._id // Set assignedTo to the user ID
            });
        } else {
            setFormData({
                title: '',
                description: '',
                status: 'pending',
                dueDate: '',
                priority: 'medium',
                assignedTo: ''
            });
        }
    }, [task]);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            await axios.get(API.USERS).then(
                response => {
                    setUsers(response.data.data);
                }
            )
            // setUsers(response.data.data); // Access the data array from the response
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value});
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await onSave({...formData, userId: user.id});
        setFormData({
            title: '',
            description: '',
            status: 'pending',
            dueDate: '',
            priority: 'medium',
            assignedTo: ''
        });
    };

    const handleClear = () => {
        onClear();
    };

    return (
        <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold text-gray-800">Task Details</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
                {/* Title */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Title</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter a task title (e.g., Buy groceries)"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>

                {/* Description */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleChange}
                        placeholder="Briefly describe the task..."
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>

                {/* Status and Priority */}
                <div className="flex space-x-4">
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Status</label>
                        <select
                            name="status"
                            value={formData.status}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        >
                            <option value="pending">Pending</option>
                            <option value="completed">Completed</option>
                        </select>
                    </div>
                    <div className="w-1/2">
                        <label className="block text-sm font-medium text-gray-700">Priority</label>
                        <select
                            name="priority"
                            value={formData.priority}
                            onChange={handleChange}
                            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                        >
                            <option value="low">Low</option>
                            <option value="medium">Medium</option>
                            <option value="high">High</option>
                        </select>
                    </div>
                </div>

                {/* Due Date */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Due Date</label>
                    <input
                        type="date"
                        name="dueDate"
                        value={formData.dueDate.split('T')[0]}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    />
                </div>

                {/* Assigned To */}
                <div>
                    <label className="block text-sm font-medium text-gray-700">Assigned To</label>
                    <select
                        name="assignedTo"
                        value={formData.assignedTo}
                        onChange={handleChange}
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-2"
                    >
                        <option value="">Select a user</option>
                        {users.map(user => (
                            <option key={user._id} value={user._id}>{user.username}</option>
                        ))}
                    </select>
                </div>

                {/* Buttons */}
                <div className="flex justify-between">
                    <button
                        type="button"
                        onClick={handleClear}
                        className="py-2 px-4 bg-gray-200 text-gray-800 font-medium rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        Clear
                    </button>
                    <button
                        type="submit"
                        className="py-2 px-6 bg-indigo-600 text-white font-medium rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Save Task
                    </button>
                </div>
            </form>
        </div>
    );
};

export default TaskForm;