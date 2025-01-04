import React from 'react';
import {Link} from 'react-router-dom';
import {Routes} from '../config.js';

const TaskStatistics = ({summary}) => {
    return (
        <section className="mb-4">
            <div className="bg-white p-4 rounded-lg shadow-md">
                <h2 className="text-xl font-bold mb-2">Task Statistics</h2>
                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-blue-700">Total Tasks</h3>
                        <Link to={Routes.TASK_LIST}>
                            <p className="text-2xl font-bold text-blue-700">{summary.totalTasks}</p>
                        </Link>
                    </div>
                    <div className="bg-green-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-green-700">Completed</h3>
                        <Link to={Routes.TASK_LIST + "?status=completed"}>
                            <p className="text-2xl font-bold text-green-700">{summary.completedTasks}</p>
                        </Link>
                    </div>
                    <div className="bg-yellow-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-yellow-700">Pending</h3>
                        <Link to={Routes.TASK_LIST + "?status=pending"}>
                            <p className="text-2xl font-bold text-yellow-700">{summary.pendingTasks}</p>
                        </Link>
                    </div>
                    <div className="bg-red-100 p-4 rounded-lg">
                        <h3 className="text-lg font-semibold text-red-700">Overdue</h3>
                        <Link to={Routes.TASK_LIST + "?status=overdue"}>
                            <p className="text-2xl font-bold text-red-700">{summary.overdueTasks}</p>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TaskStatistics;