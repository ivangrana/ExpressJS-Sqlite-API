const ItemModel = require('../ models/item');

class ItemController {
    constructor() {
        this.itemModel = new ItemModel();
    }

    getAllItems(req, res) {
        this.itemModel.getAllItems((err, rows) => {
            if (err) {
                console.error('Error fetching items:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                const item_list = rows.map(item => ({
                    category: item.category,
                    client: item.client,
                    quantity: item.quantity
                }));
                res.json(item_list);
            }
        });
    }

    addItem(req, res) {
        const { category, client, quantity } = req.body;
        this.itemModel.addItem(category, client, quantity, (err) => {
            if (err) {
                console.error('Error adding item:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'Item added successfully' });
            }
        });
    }

    updateItem(req, res) {
        const id = req.params.id;
        const { category, client, quantity } = req.body;
        this.itemModel.updateItem(id, category, client, quantity, (err) => {
            if (err) {
                console.error('Error updating item:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'Item updated successfully' });
            }
        });
    }

    deleteItem(req, res) {
        const id = req.params.id;
        this.itemModel.deleteItem(id, (err) => {
            if (err) {
                console.error('Error deleting item:', err.message);
                res.status(500).json({ error: 'Internal Server Error' });
            } else {
                res.json({ message: 'Item deleted successfully' });
            }
        });
    }
}

module.exports = ItemController;
