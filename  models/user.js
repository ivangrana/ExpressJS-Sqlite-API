const sqlite3 = require('sqlite3').verbose();

class UserModel {
    constructor() {
        this.db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    }

    getAllusers(callback) {
        this.db.all('SELECT * FROM user', [], callback);
    }

    getUsers(id, callback) {
        this.db.get('SELECT * FROM user WHERE id = ?', [id], callback);
    }

    getTasksByUser(user_id, callback) {
        this.db.all('SELECT u.*, t.* FROM user u LEFT JOIN UserTask ut ON u.id = ? LEFT JOIN tasks t ON ut.task_id = t.id;', [user_id], callback);
    }
}

module.exports = UserModel;
