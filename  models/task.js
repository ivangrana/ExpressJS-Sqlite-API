const sqlite3 = require('sqlite3').verbose();

class TaskModel {
    constructor() {
        this.db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    }

    getAlltasks(callback) {
        this.db.all('SELECT * FROM tasks', [], callback);
    }

    getTask(id, callback) {
        this.db.get('SELECT * FROM tasks WHERE id = ?', [id], callback);
    }

    addTask(title, description, callback) {
        this.db.run('INSERT INTO tasks (title, description) VALUES (?, ?)', [title, description], callback);
    }

    updateTask(id, category, title, description, callback) {
        this.db.run('UPDATE tasks SET category = ?, title = ?, description = ? WHERE id = ?', [category, title, description, id], callback);
    }

    deleteTask(id, callback) {
        this.db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
    }
}

module.exports = TaskModel;
