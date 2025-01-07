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