// routes/feedbackRoutes.js
const express = require('express');
const feedbackController = require('../controllers/feedbackController');
const { authMiddleware } = require('../middleware/adminMiddleware');


const router = express.Router();

// Companion submits feedback
router.post('/send', authMiddleware(['traveler_companion']), feedbackController.submitFeedback);

module.exports = router;
