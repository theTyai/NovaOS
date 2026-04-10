const express = require('express');
const CodingLog = require('../models/CodingLog');
const axios = require('axios');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

// @desc    Get coding logs
// @route   GET /api/v1/coding
router.get('/', async (req, res, next) => {
  try {
    const logs = await CodingLog.find({ user: req.user.id }).sort('-date');
    res.status(200).json({ success: true, data: logs });
  } catch (err) {
    next(err);
  }
});

// @desc    Sync with GitHub
// @route   POST /api/v1/coding/sync
router.post('/sync', async (req, res, next) => {
  try {
    const user = req.user;
    if (!user.tokens.github) {
      return res.status(400).json({ success: false, error: 'GitHub token not found' });
    }

    // Example GitHub API call to get recent events
    const response = await axios.get(`https://api.github.com/users/${user.name}/events`, {
      headers: { Authorization: `token ${user.tokens.github}` }
    });

    // Process events and update CodingLog...
    // (Actual logic would parse commit counts, etc.)

    res.status(200).json({ success: true, message: 'Synced with GitHub' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
