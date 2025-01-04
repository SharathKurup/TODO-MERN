import React from 'react';

const SkeletonTaskStatistics = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="grid grid-cols-2 gap-4">
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
                <div className="h-6 bg-gray-200 rounded"></div>
            </div>
        </div>
    );
};

export default SkeletonTaskStatistics;