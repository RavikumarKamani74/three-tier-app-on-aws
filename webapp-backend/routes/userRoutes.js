const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// GET /users - list all users
router.get('/', userController.getAllUsers);

// POST /users - create a new user
router.post('/', userController.createUser);

module.exports = router;
