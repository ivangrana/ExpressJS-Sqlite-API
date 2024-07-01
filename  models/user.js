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
        this.db.all('SELECT * FROM UserTable WHERE user_id = ?', [user_id], callback);
    }
}

module.exports = UserModel;
