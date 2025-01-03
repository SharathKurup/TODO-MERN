import {Task} from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
    try {
        const userId = req.user.id;//use it to filter tasks by userId

        Task.find({userId})
            .then(tasks => res.status(200).json(tasks))
            .catch(err => res.status(500).json({error: "Failed to fetch tasks"}));


    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const getTasksById = async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Task.findById(id);
        if (!task) {
            return res.status(404).send({message: 'Task not found'});
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(500).send({message: error.message});
    }
}

const createTask = async (req, res) => {
    try {
        if (!req.body.title || !req.body.description || !req.body.status || !req.body.userId) {
            return res.status(400).send({message: 'Title, Description, Status, UserId and CreatedAt are required'});
        }
        const task = new Task(req.body);
        const result = await task.save();
        res.status(201).send(result);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        if (!req.body.title || !req.body.description || !req.body.status) {
            return res.status(400).send({message: 'Title, Description, Status, UserId and updatedAt are required'});
        }
        const task = await Task.findByIdAndUpdate(id, req.body);
        if (!task) {
            return res.status(404).send({message: 'Task not found'});
        }
        res.status(200).send(task);
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}

const deleteTask = async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id);
        if (!task) {
            return res.status(404).send({message: 'Task not found'});
        }
        res.status(200).send({message: 'Task deleted successfully'});
    } catch (error) {
        res.status(400).send({message: error.message});
    }
}

const getTasksSummary = async (req, res) => {
    try {
        const userId = req.user.id; // Use it to filter tasks by userId
        const totalTasks = await Task.countDocuments({userId});
        const completedTasks = await Task.countDocuments({userId, status: 'completed'});
        const pendingTasks = await Task.countDocuments({userId, status: 'pending'});
        const latestTasks = await Task.find({userId}).sort({updatedAt: -1}).limit(3);

        res.status(200).json({
            totalTasks,
            completedTasks,
            pendingTasks,
            latestTasks
        });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

export default {getAllTasks, getTasksById, createTask, updateTask, deleteTask, getTasksSummary};