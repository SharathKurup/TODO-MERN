import React from 'react';

const SkeletonHeader = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-6 bg-gray-200 rounded w-1/2"></div>
        </div>
    );
};

export default SkeletonHeader;