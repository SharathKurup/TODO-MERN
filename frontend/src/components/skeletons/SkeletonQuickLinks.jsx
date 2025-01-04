import React from 'react';

const SkeletonQuickLinks = () => {
    return (
        <div className="bg-white p-4 rounded-lg shadow-md">
            <div className="h-6 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="flex space-x-4">
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
                <div className="h-10 bg-gray-200 rounded w-1/3"></div>
            </div>
        </div>
    );
};

export default SkeletonQuickLinks;