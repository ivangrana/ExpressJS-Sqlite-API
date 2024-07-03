const TaskModel = require('../ models/task');

class TaskController {
    constructor() {
        this.tasksModel = new TaskModel();
    }

    getAlltasks(req, res) {
        this.tasksModel.getAlltasks((err, rows) => {
            if (err) {
                console.error('Error fetching tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const tasks_list = rows.map(tasks => ({
                    title: tasks.title,
                    description: tasks.description,
                    completed: Boolean(tasks.completed)
                }));
                res.json(tasks_list);
            }
        });
    } 

    getTask(req, res) {
        const id = req.params.id;
        this.tasksModel.getTask(id, (err, tasks) => {
            if (err) {
                console.error('Error fetching tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else if (tasks) {
                res.json({
                    title: tasks.title,
                    description: tasks.description,
                    completed: Boolean(tasks.completed)
                });
            } else {
                res.status(404).json({ error: 'tasks not found' });
            }
        });
    }

    addtask(req, res) {
        const { title, description } = req.body;
        this.tasksModel.addTask(title, description, (err) => {
            if (err) {
                console.error('Error adding tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'tasks added successfully' });
            }
        });
    }

    updateTask(req, res) {
        const id = req.params.id;
        const { category, title, description } = req.body;
        this.tasksModel.updateTask(id, category, title, description, (err) => {
            if (err) {
                console.error('Error updating tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'tasks updated successfully' });
            }
        });
    }

    deleteTask(req, res) {
        const id = req.params.id;
        this.tasksModel.deleteTask(id, (err) => {
            if (err) {
                console.error('Error deleting tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'tasks deleted successfully' });
            }
        });
    }
}

module.exports = TaskController;
