const mongoose = require('mongoose');

const disciplineScoreSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  score: {
    type: Number,
    required: true,
    min: 0,
    max: 100,
  },
  breakdown: {
    tasksCompleted: Number,
    focusHours: Number,
    habitsCompleted: Number,
    codingActivity: Number,
    learningProgress: Number,
    healthActivity: Number,
  },
  note: String,
});

module.exports = mongoose.model('DisciplineScore', disciplineScoreSchema);
