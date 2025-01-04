import React from 'react';
import SkeletonTaskStatistics from './SkeletonTaskStatistics';
import SkeletonRecentActivity from './SkeletonRecentActivity';
import SkeletonQuickLinks from './SkeletonQuickLinks';
import SkeletonPieChart from './SkeletonPieChart';
import SkeletonHeader from './SkeletonHeader';

const SkeletonDashboard = () => {
    return (
        <div className="min-h-screen bg-blue-100 p-4">
            <SkeletonHeader/>
            <main className="p-4">
                <SkeletonTaskStatistics/>
                <SkeletonRecentActivity/>
                <SkeletonQuickLinks/>
                <SkeletonPieChart/>
            </main>
        </div>
    );
};

export default SkeletonDashboard;