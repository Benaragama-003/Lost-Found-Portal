const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');
const { approveMatch } = require('../controllers/matchController');

router.get('/suggested-matches', matchController.getSuggestedMatches);
router.post('/approve', approveMatch);
router.post('/reject', matchController.rejectMatch);

module.exports = router;
