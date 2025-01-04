import React from 'react';

const SkeletonPieChart = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="bg-gray-200 p-4 rounded-lg h-40"></div>
        </div>
    );
};

export default SkeletonPieChart;