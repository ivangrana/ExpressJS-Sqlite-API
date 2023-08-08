const sqlite3 = require('sqlite3').verbose();

class ItemModel {
    constructor() {
        this.db = new sqlite3.Database('database.db', sqlite3.OPEN_READWRITE | sqlite3.OPEN_CREATE);
    }

    getAllItems(callback) {
        this.db.all('SELECT * FROM items', [], callback);
    }

    addItem(category, client, quantity, callback) {
        this.db.run('INSERT INTO items (category, client, quantity) VALUES (?, ?, ?)', [category, client, quantity], callback);
    }

    updateItem(id, category, client, quantity, callback) {
        this.db.run('UPDATE items SET category = ?, client = ?, quantity = ? WHERE id = ?', [category, client, quantity, id], callback);
    }

    deleteItem(id, callback) {
        this.db.run('DELETE FROM items WHERE id = ?', [id], callback);
    }
}

module.exports = ItemModel;
