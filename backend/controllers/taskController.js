import {Task} from "../models/taskModel.js";

const getAllTasks = async (req, res) => {
    try {
        const userId = req.user.id;//use it to filter tasks by userId

        Task.find({userId})
            .populate({
                path: 'assignedTo',
                select: 'username',
                model: 'User' // Explicitly specify the model, not mandatory if you have ref in schema
            })//.populate('assignedTo', 'username') // Assuming the User model has a 'username' field, works by checking ref
            .then(tasks => res.status(200).json(tasks))
            .catch(() => res.status(500).json({error: "Failed to fetch tasks"}));
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

//Todo: verify the return statement, not returning updated task
const updateTask = async (req, res) => {
    try {
        const {id} = req.params;
        if (!req.body.title && !req.body.description && !req.body.status && !req.body.priority) {
            return res.status(400).send({message: 'Empty values are not allowed'});
        }
        const task = await Task.findByIdAndUpdate(id, req.body, {new: true});
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
        const overdueTasks = await Task.countDocuments({userId, dueDate: {$lt: new Date()}, status: 'pending'});
        const latestTasks = await Task.find({userId}).sort({updatedAt: -1}).limit(3);

        res.status(200).json({
            totalTasks,
            completedTasks,
            pendingTasks,
            overdueTasks,
            latestTasks
        });
    } catch (error) {
        res.status(500).send({message: error.message});
    }
};

export default {getAllTasks, getTasksById, createTask, updateTask, deleteTask, getTasksSummary};