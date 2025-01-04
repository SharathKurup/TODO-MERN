import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';
import { API } from "../config.js";
import axios from "axios";
import Header from '../components/Header';
import TaskList from '../components/TaskList';
import SkeletonTaskList from '../components/skeletons/SkeletonTaskList';

const TaskListPage = () => {
    const { token, user } = useAuth();
    const [loading, setLoading] = useState(true);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        setLoading(true);
        axios.get(API.TASKS, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            setTasks(response.data);
            setLoading(false);
        }).catch(error => {
            console.error('An error occurred:', error);
            setLoading(false);
        });
    }, [token]);

    if (loading) {
        return <SkeletonTaskList />;
    }

    return (
        <div className="min-h-screen bg-blue-100">
            <Header user={user} />
            <main className="p-4">
                <TaskList tasks={tasks} />
            </main>
        </div>
    );
};

export default TaskListPage;