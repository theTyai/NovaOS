const express = require('express');
const {
  createLearningModule,
  getLearningModules,
  updateProgress,
} = require('../controllers/learning');

const router = express.Router();

const { protect } = require('../middleware/auth');

router.use(protect);

router.route('/').get(getLearningModules).post(createLearningModule);
router.route('/:id/progress').put(updateProgress);

module.exports = router;
