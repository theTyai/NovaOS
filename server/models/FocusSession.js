const mongoose = require('mongoose');

const focusSessionSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  task: {
    type: mongoose.Schema.ObjectId,
    ref: 'Task',
  },
  type: {
    type: String,
    enum: ['work', 'short-break', 'long-break'],
    default: 'work',
  },
  duration: {
    type: Number, // duration in minutes
    required: true,
  },
  startTime: {
    type: Date,
    default: Date.now,
  },
  endTime: {
    type: Date,
  },
  wasCompleted: {
    type: Boolean,
    default: false,
  },
  notes: String,
});

module.exports = mongoose.model('FocusSession', focusSessionSchema);
