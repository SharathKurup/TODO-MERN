import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faEye, faTrash} from '@fortawesome/free-solid-svg-icons';
import {useLocation} from 'react-router-dom';

const TaskList = ({tasks}) => {
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const statusFilter = queryParams.get('status');
    const filteredTasks = statusFilter === 'overdue'
        ? tasks.filter(task => task.status === 'pending' && new Date(task.dueDate) < new Date())
        : (statusFilter ? tasks.filter(task => task.status === statusFilter) : tasks);
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Description</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Due
                        Date
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Priority</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Assigned
                        To
                    </th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Operations</th>
                </tr>
                </thead>
                <tbody>
                {filteredTasks.map(task => (
                    <tr key={task._id} className="hover:bg-gray-50">
                        <td className="px-4 py-2 border-b border-gray-200">{task.title}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{task.description}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{task.status}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{new Date(task.dueDate).toLocaleDateString()}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{task.priority}</td>
                        <td className="px-4 py-2 border-b border-gray-200">{task.assignedTo?.username || 'Unassigned'}</td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="flex space-x-2">
                                <button className="text-blue-500 hover:text-blue-700">
                                    <FontAwesomeIcon icon={faEye}/>
                                </button>
                                <button className="text-green-500 hover:text-green-700">
                                    <FontAwesomeIcon icon={faEdit}/>
                                </button>
                                <button className="text-red-500 hover:text-red-700">
                                    <FontAwesomeIcon icon={faTrash}/>
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskList;