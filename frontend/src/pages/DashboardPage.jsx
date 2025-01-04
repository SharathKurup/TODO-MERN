import React, {useEffect, useState} from 'react';
import useAuth from '../hooks/useAuth';
import {API} from "../config.js";
import axios from "axios";
import SkeletonDashboard from "../components/skeletons/SkeletonDashboard.jsx";
import Header from '../components/Header';
import RecentActivity from "../components/RecentActivity.jsx";
import QuickLinks from "../components/QuickLinks.jsx";
import PieChart from "../components/PieChart.jsx";
import TaskStatistics from "../components/TaskStatistics.jsx";

const DashboardPage = () => {
    const {token, user} = useAuth();
    const [loading, setLoading] = useState(true);
    const [summary, setSummary] = useState(null);

    // const formatEditedDateTime = (date) => {
    //     const now = new Date();
    //     const updatedAt = new Date(date);
    //     const diff = Math.abs(now - updatedAt);
    //     const minutes = Math.floor(diff / (1000 * 60));
    //     const hours = Math.floor(minutes / 60);
    //     const days = Math.floor(hours / 24);
    //
    //     if (days > 0) {
    //         return `${days} day${days > 1 ? 's' : ''} ago`;
    //     } else if (hours > 0) {
    //         return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    //     } else {
    //         return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    //     }
    // };

    useEffect(() => {
        setLoading(true);
        // setTimeout(() => {
            axios.get(API.SUMMARY, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            }).then(response => {
                setSummary(response.data);
                setLoading(false);
            }).catch(error => {
                console.error('An error occurred:', error);
                setLoading(false);
            });
        // }, 2000);
    }, [token]);

    if (loading) {
        return <SkeletonDashboard/>;
    }

    return (
        <div className="min-h-screen bg-blue-100">
            <Header user={user}/>
            <main className="p-4">
                <TaskStatistics summary={summary}/>
                <RecentActivity latestTasks={summary.latestTasks}/>
                <QuickLinks/>
                <PieChart/>
            </main>
        </div>
    );
};

export default DashboardPage;