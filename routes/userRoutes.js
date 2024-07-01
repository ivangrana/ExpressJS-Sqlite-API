const express = require('express');
const UserController = require('../controllers/userController');

const router = express.Router();
const userController = new UserController();

router.get('/api/users', userController.getUsers.bind(userController));
router.get('/api/users/:user_id/tasks', userController.getTasksByUser.bind(userController));
module.exports = router;
