import React from 'react';

const SkeletonRecentActivity = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <ul>
                <li className="h-6 bg-gray-200 rounded mb-2"></li>
                <li className="h-6 bg-gray-200 rounded mb-2"></li>
                <li className="h-6 bg-gray-200 rounded mb-2"></li>
            </ul>
        </div>
    );
};

export default SkeletonRecentActivity;