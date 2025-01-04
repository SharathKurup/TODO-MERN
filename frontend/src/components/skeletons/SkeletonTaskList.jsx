import React from 'react';

const SkeletonTaskList = () => {
    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                <thead>
                <tr>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Title</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Description</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Status</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Due Date</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Priority</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Assigned To</th>
                    <th className="px-4 py-2 border-b-2 border-gray-200 bg-gray-100 text-left text-sm font-semibold text-gray-600">Operations</th>
                </tr>
                </thead>
                <tbody>
                {[...Array(5)].map((_, index) => (
                    <tr key={index} className="animate-pulse">
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="h-4 bg-gray-200 rounded"></div>
                        </td>
                        <td className="px-4 py-2 border-b border-gray-200">
                            <div className="flex space-x-2">
                                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                                <div className="h-4 w-4 bg-gray-200 rounded"></div>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default SkeletonTaskList;