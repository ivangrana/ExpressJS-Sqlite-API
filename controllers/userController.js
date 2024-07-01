const UserModel = require('../ models/user');

class TaskController {
    constructor() {
        this.userModel = new UserModel();
    }

    getUsers (req, res) {
        this.userModel.getAllusers((err, rows) => {
            if (err) {
                console.error('Error fetching users:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const users_list = rows.map(user => ({
                    name: user.name,
                    id: user.id
                }));
                res.json(users_list);
            }
        });
    }

    getTasksByUser(req, res) {
        const user_id = req.params.user_id;
        this.userModel.getTasksByUser(user_id, (err, rows) => {
            if (err) {
                console.error('Error fetching tasks:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const tasks_list = rows.map(tasks => ({
                    title: tasks.title,
                    description: tasks.description,
                    id: tasks.id
                }));
                res.json(tasks_list);
            }
        });
    }
}

module.exports = TaskController;
