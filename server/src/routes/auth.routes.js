const express = require('express');
const authRoutes = express.Router();
const authController = require('../controllers/auth.controller');

authRoutes.post('/login', authController.login);
authRoutes.post('/register', authController.register);
authRoutes.get('/verifyToken', authController.verifyToken);

module.exports = authRoutes;
