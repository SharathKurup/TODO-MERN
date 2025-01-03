import express from "express";
import authenticateToken from "../middleware/authMiddleware.js";
import taskController from "../controllers/taskController.js";

const router = express.Router();

router.get('/summary', authenticateToken, taskController.getTasksSummary);
router.get('/', authenticateToken, taskController.getAllTasks);
router.get('/:id', authenticateToken, taskController.getTasksById);
router.post('/', authenticateToken, taskController.createTask);
router.put('/:id', authenticateToken, taskController.updateTask);
router.delete('/:id', authenticateToken, taskController.deleteTask);

export default router;