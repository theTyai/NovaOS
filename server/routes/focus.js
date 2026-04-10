const express = require('express');
const FocusSession = require('../models/FocusSession');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

// @desc    Get focus sessions
// @route   GET /api/v1/focus
router.get('/', async (req, res, next) => {
  try {
    const sessions = await FocusSession.find({ user: req.user.id }).sort('-startTime');
    res.status(200).json({ success: true, data: sessions });
  } catch (err) {
    next(err);
  }
});

// @desc    Create focus session
// @route   POST /api/v1/focus
router.post('/', async (req, res, next) => {
  try {
    req.body.user = req.user.id;
    const session = await FocusSession.create(req.body);
    res.status(201).json({ success: true, data: session });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
