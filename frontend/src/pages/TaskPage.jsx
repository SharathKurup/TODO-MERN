import React, {useState, useEffect} from 'react';
import TaskForm from '../components/TaskForm.jsx';
import {API} from '../config.js';
import Header from '../components/Header';
import axios from 'axios';
import useAuth from "../hooks/useAuth.js";
import Skeleton from '../components/skeletons/Skeleton.jsx';
import {useNavigate} from 'react-router-dom';
import {Routes} from "../config.js";

const TaskPage = () => {
    const {token, user} = useAuth();
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [selectedTask, setSelectedTask] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTasks();
    }, [token]);

    const fetchTasks = async () => {
        try {
            setLoading(true);
            const response = await axios.get(API.TASKS, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setTasks(response.data);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching tasks:', error);
            setLoading(false);
        }
    };

    const handleSave = async (task) => {
        try {
            if (task._id) {
                await axios.put(`${API.TASKS}/${task._id}`, task, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            } else {
                await axios.post(API.TASKS, task, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
            }
            fetchTasks();
            setSelectedTask(null);
        } catch (error) {
            console.error('Error saving task:', error);
        }
    };

    const handleDelete = async (taskId) => {
        try {
            await axios.delete(`${API.TASKS}/${taskId}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            fetchTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    };

    const handleClear = () => {
        setSelectedTask(null);
    };

    return (
        <div className="min-h-screen bg-blue-50">
            <Header user={user}/>
            <div className="container mx-auto p-4">
                <div className="flex justify-between items-center mb-4">
                    <button
                        onClick={() => navigate(Routes.DASHBOARD)}
                        className="py-1 px-3 bg-gray-200 text-gray-800 font-medium rounded-md shadow-sm hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                    >
                        &larr; Back to Dashboard
                    </button>
                    <h1 className="text-2xl font-bold text-center flex-grow">Tasks</h1>
                </div>
                <div className="flex">
                    <div className="w-1/3 pr-4">
                        {loading ? (
                            <Skeleton/>
                        ) : (
                            <ul className="space-y-4">
                                {tasks.map((task) => (
                                    <li key={task._id}
                                        className="p-4 border border-gray-300 rounded-md shadow-sm bg-white">
                                        <h3 className="text-lg font-bold">{task.title}</h3>
                                        <p>{task.description}</p>
                                        <p>Status: <span
                                            className={`status-indicator ${task.status}`}>{task.status}</span></p>
                                        <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
                                        <p>Priority: {task.priority}</p>
                                        <p>Assigned To: {task.assignedTo.username}</p>
                                        <div className="mt-4 space-x-2">
                                            <button
                                                onClick={() => setSelectedTask(task)}
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-gray-600 bg-gray-200 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400"
                                            >
                                                Edit
                                            </button>
                                            <button
                                                onClick={() => handleDelete(task._id)}
                                                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                            >
                                                Delete
                                            </button>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <div className="w-2/3 pl-4">
                        <TaskForm task={selectedTask} onSave={handleSave} onClear={handleClear}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TaskPage;

// import React, { useState, useEffect } from 'react';
// import TaskForm from '../components/TaskForm.jsx';
// import { API } from '../config.js';
// import Header from '../components/Header';
// import axios from 'axios';
// import useAuth from "../hooks/useAuth.js";
// import Skeleton from '../components/skeletons/Skeleton.jsx';
//
// const TaskPage = () => {
//     const { token, user } = useAuth();
//     const [tasks, setTasks] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [selectedTask, setSelectedTask] = useState(null);
//
//     useEffect(() => {
//         fetchTasks();
//     }, [token]);
//
//     const fetchTasks = async () => {
//         try {
//             setLoading(true);
//             const response = await axios.get(API.TASKS, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             setTasks(response.data);
//             setLoading(false);
//         } catch (error) {
//             console.error('Error fetching tasks:', error);
//             setLoading(false);
//         }
//     };
//
//     const handleSave = async (task) => {
//         try {
//             if (task._id) {
//                 await axios.put(`${API.TASKS}/${task._id}`, task, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//             } else {
//                 await axios.post(API.TASKS, task, {
//                     headers: {
//                         Authorization: `Bearer ${token}`
//                     }
//                 });
//             }
//             fetchTasks();
//             setSelectedTask(null);
//         } catch (error) {
//             console.error('Error saving task:', error);
//         }
//     };
//
//     const handleDelete = async (taskId) => {
//         try {
//             await axios.delete(`${API.TASKS}/${taskId}`, {
//                 headers: {
//                     Authorization: `Bearer ${token}`
//                 }
//             });
//             fetchTasks();
//         } catch (error) {
//             console.error('Error deleting task:', error);
//         }
//     };
//
//     const handleClear = () => {
//         setSelectedTask(null);
//     };
//
//     return (
//         <div className="min-h-screen bg-blue-100">
//             <Header user={user} />
//             <div className="container mx-auto p-4 flex">
//                 <div className="w-1/3 pr-4">
//                     <h1 className="text-2xl font-bold mb-4">Tasks</h1>
//                     {loading ? (
//                         <Skeleton />
//                     ) : (
//                         <ul className="space-y-4">
//                             {tasks.map((task) => (
//                                 <li key={task._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
//                                     <h3 className="text-lg font-bold">{task.title}</h3>
//                                     <p>{task.description}</p>
//                                     <p>Status: {task.status}</p>
//                                     <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
//                                     <p>Priority: {task.priority}</p>
//                                     <p>Assigned To: {task.assignedTo.username}</p>
//                                     <div className="mt-4 space-x-2">
//                                         <button
//                                             onClick={() => setSelectedTask(task)}
//                                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
//                                         >
//                                             Edit
//                                         </button>
//                                         <button
//                                             onClick={() => handleDelete(task._id)}
//                                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
//                                         >
//                                             Delete
//                                         </button>
//                                     </div>
//                                 </li>
//                             ))}
//                         </ul>
//                     )}
//                 </div>
//                 <div className="w-2/3 pl-4">
//                     <TaskForm task={selectedTask} onSave={handleSave} onClear={handleClear} />
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TaskPage;
//
// // import React, {useState, useEffect} from 'react';
// // import TaskForm from '../components/TaskForm.jsx';
// // import {API} from '../config.js';
// // import Header from '../components/Header';
// // import axios from 'axios';
// // import useAuth from "../hooks/useAuth.js";
// // import Skeleton from '../components/skeletons/Skeleton.jsx';
// //
// // const TaskPage = () => {
// //     const {token, user} = useAuth();
// //     const [tasks, setTasks] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [selectedTask, setSelectedTask] = useState(null);
// //
// //     useEffect(() => {
// //         fetchTasks();
// //     }, [token]);
// //
// //     const fetchTasks = async () => {
// //         try {
// //             setLoading(true);
// //             await axios.get(API.TASKS, {
// //                 headers: {
// //                     Authorization: `Bearer ${token}`
// //                 }
// //             }).then(response => {
// //                 setTasks(response.data);
// //                 console.log(response.data);
// //                 setLoading(false);
// //             }).catch(error => {
// //                 console.error('An error occurred:', error);
// //                 setLoading(false);
// //             });
// //             //setTasks(response.data);
// //             //setLoading(false);
// //         } catch (error) {
// //             console.error('Error fetching tasks:', error);
// //             setLoading(false);
// //         }
// //     };
// //
// //     const handleSave = async (task) => {
// //         try {
// //             if (task._id) {
// //                 await axios.put(`${API.TASKS}/${task._id}`, task, {
// //                     headers: {
// //                         Authorization: `Bearer ${token}`
// //                     }
// //                 });
// //             } else {
// //                 await axios.post(API.TASKS, task, {
// //                     headers: {
// //                         Authorization: `Bearer ${token}`
// //                     }
// //                 });
// //             }
// //             fetchTasks();
// //             setSelectedTask(null);
// //         } catch (error) {
// //             console.error('Error saving task:', error);
// //         }
// //     };
// //
// //     const handleDelete = async (taskId) => {
// //         try {
// //             await axios.delete(`${API.TASKS}/${taskId}`, {
// //                 headers: {
// //                     Authorization: `Bearer ${token}`
// //                 }
// //             });
// //             fetchTasks();
// //         } catch (error) {
// //             console.error('Error deleting task:', error);
// //         }
// //     };
// //
// //     return (
// //         <div className="min-h-screen bg-blue-100">
// //             <Header user={user}/>
// //             <div className="container mx-auto p-4">
// //                 <h1 className="text-2xl font-bold mb-4">Tasks</h1>
// //                 <TaskForm task={selectedTask} onSave={handleSave}/>
// //                 <div className="mt-8">
// //                     <h2 className="text-xl font-semibold mb-4">Task List</h2>
// //                     {loading ? (
// //                         <Skeleton/>
// //                     ) : (
// //                         <ul className="space-y-4">
// //                             {tasks.map((task) => (
// //                                 <li key={task._id} className="p-4 border border-gray-300 rounded-md shadow-sm">
// //                                     <h3 className="text-lg font-bold">{task.title}</h3>
// //                                     <p>{task.description}</p>
// //                                     <p>Status: {task.status}</p>
// //                                     <p>Due Date: {new Date(task.dueDate).toLocaleDateString()}</p>
// //                                     <p>Priority: {task.priority}</p>
// //                                     <p>Assigned
// //                                         To: {task.assignedTo.username}</p> {/* Accessing the username property */}
// //                                     <div className="mt-4 space-x-2">
// //                                         <button
// //                                             onClick={() => setSelectedTask(task)}
// //                                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
// //                                         >
// //                                             Edit
// //                                         </button>
// //                                         <button
// //                                             onClick={() => handleDelete(task._id)}
// //                                             className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
// //                                         >
// //                                             Delete
// //                                         </button>
// //                                     </div>
// //                                 </li>
// //                             ))}
// //                         </ul>
// //                     )}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
// //
// // export default TaskPage;