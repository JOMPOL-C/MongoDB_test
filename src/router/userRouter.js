const express = require('express');
const router = express.Router();
const userController = require('../controller/userController');
const upload = require('../middlewares/upload'); // ← ใช้ upload.js ที่เป็น memoryStorage
const cloudinary = require('cloudinary').v2;


router
    .route('/')
    .post(upload.single('avatar'), userController.createUser,);

module.exports = router;
