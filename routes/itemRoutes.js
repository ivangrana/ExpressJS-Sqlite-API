const express = require('express');
const ItemController = require('../controllers/itemController');

const router = express.Router();
const itemController = new ItemController();

router.get('/api/items', itemController.getAllItems.bind(itemController));
router.post('/api/items', itemController.addItem.bind(itemController));
router.put('/api/items/:id', itemController.updateItem.bind(itemController));
router.delete('/api/items/:id', itemController.deleteItem.bind(itemController));

module.exports = router;
