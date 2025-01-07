import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheckCircle, faEdit} from '@fortawesome/free-solid-svg-icons';

const formatEditedDateTime = (date) => {
    const now = new Date();
    const updatedAt = new Date(date);
    const diff = Math.abs(now - updatedAt);
    const minutes = Math.floor(diff / (1000 * 60));
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 0) {
        return `${days} day${days > 1 ? 's' : ''} ago`;
    } else if (hours > 0) {
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    }
};

const RecentActivity = ({latestTasks}) => {
    return (
        <section className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Recent Activity</h2>
                <ul className="space-y-4">
                    {latestTasks.map(task => (
                        <li key={task._id} className="flex items-center space-x-4">
                            <div>
                                {task.status === 'completed' ? (
                                    <FontAwesomeIcon icon={faCheckCircle} className="text-green-500"/>
                                ) : (
                                    <FontAwesomeIcon icon={faEdit} className="text-yellow-500"/>
                                )}
                            </div>
                            <div>
                                <p className="text-lg font-semibold text-gray-800">{task.title}</p>
                                <p className="text-sm text-gray-600">{task.status === 'completed' ? 'Marked as completed' : 'Edited'} {formatEditedDateTime(task.updatedAt)}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
};

export default RecentActivity;