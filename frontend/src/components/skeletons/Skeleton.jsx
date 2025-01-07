// frontend/src/components/Skeleton.jsx
import React from 'react';

const Skeleton = () => {
    return (
        <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
            <div className="h-4 bg-gray-300 rounded"></div>
        </div>
    );
};

export default Skeleton;