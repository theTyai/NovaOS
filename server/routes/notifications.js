const express = require('express');
const Notification = require('../models/Notification');
const webpush = require('web-push');

const router = express.Router();
const { protect } = require('../middleware/auth');

router.use(protect);

// @desc    Get notifications
// @route   GET /api/v1/notifications
router.get('/', async (req, res, next) => {
  try {
    const notifications = await Notification.find({ user: req.user.id }).sort('-createdAt');
    res.status(200).json({ success: true, count: notifications.length, data: notifications });
  } catch (err) {
    next(err);
  }
});

// @desc    Keep push subscription
// @route   POST /api/v1/notifications/subscribe
router.post('/subscribe', async (req, res, next) => {
  try {
    const subscription = req.body;
    // Store subscription in User model or separate collection
    // user.pushSubscription = subscription;
    // await user.save();
    
    res.status(201).json({ success: true, message: 'Subscribed' });
  } catch (err) {
    next(err);
  }
});

module.exports = router;
