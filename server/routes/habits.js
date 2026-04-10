const express = require('express');
const {
  getHabits,
  createHabit,
  logHabit,
  deleteHabit,
} = require('../controllers/habits');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/').get(getHabits).post(createHabit);
router.route('/:id/log').post(logHabit);
router.route('/:id').delete(deleteHabit);

module.exports = router;
