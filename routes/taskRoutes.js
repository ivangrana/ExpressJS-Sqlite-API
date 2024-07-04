const express = require('express');
const TaskController = require('../controllers/taskController');

const router = express.Router();
const taskController = new TaskController();

router.get('/api/tasks', taskController.getAlltasks.bind(taskController));
router.get('/api/tasks/:id', taskController.getTask.bind(taskController));
router.post('/api/tasks', taskController.addTask.bind(taskController));
router.put('/api/tasks/:id', taskController.updateTask.bind(taskController));
router.delete('/api/tasks/:id', taskController.deleteTask.bind(taskController));

module.exports = router;
