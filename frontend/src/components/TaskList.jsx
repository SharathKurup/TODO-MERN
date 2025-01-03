import React from 'react';

const TaskList = () => {
    return (
        <table className="w-full border-separate border-spacing-2">
            <thead>
            <tr>
                <th className="border border-slate-600 rounded-md">Title</th>
                <th className="border border-slate-600 rounded-md">Description</th>
                <th className="border border-slate-600 rounded-md">Status</th>
                <th className="border border-slate-600 rounded-md">Operations</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
    );
};

export default TaskList;