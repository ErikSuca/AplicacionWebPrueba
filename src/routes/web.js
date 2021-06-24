const path = require('path');
const express = require('express');
const router = express.Router();

router.get('/', (req, res)=> res.sendFile(path.resolve(__dirname, '../views', 'index.html')));
router.get('/home.html', (req, res)=> res.sendFile(path.resolve(__dirname, '../views', 'index.html')));
router.get('/register.html', (req, res)=> res.sendFile(path.resolve(__dirname, '../views', 'register.html')));
router.get('/login.html', (req, res)=> res.sendFile(path.resolve(__dirname, '../views', 'login.html')));

module.exports = router;