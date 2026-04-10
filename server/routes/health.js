const express = require('express');
const HealthData = require('../models/HealthData');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

// @desc    Get health data
// @route   GET /api/v1/health
router.get('/', async (req, res, next) => {
  try {
    const data = await HealthData.find({ user: req.user.id }).sort('-date');
    res.status(200).json({ success: true, data });
  } catch (err) {
    next(err);
  }
});

// @desc    Update today's health data
// @route   POST /api/v1/health
router.post('/', async (req, res, next) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const health = await HealthData.findOneAndUpdate(
      { user: req.user.id, date: today },
      { ...req.body, user: req.user.id, date: today },
      { upsert: true, new: true, runValidators: true }
    );

    res.status(200).json({ success: true, data: health });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
