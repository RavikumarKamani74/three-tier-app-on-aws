const express = require('express');
const router = express.Router();
const userRoutes = require('./userRoutes');

// Register all routes under /
router.use('/users', userRoutes);

module.exports = router;
