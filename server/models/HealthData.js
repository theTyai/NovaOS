const mongoose = require('mongoose');

const healthDataSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  steps: {
    type: Number,
    default: 0,
  },
  waterIntake: {
    type: Number, // in ml
    default: 0,
  },
  sleepHours: {
    type: Number,
    default: 0,
  },
  exerciseMinutes: {
    type: Number,
    default: 0,
  },
  mood: {
    type: String,
    enum: ['great', 'good', 'okay', 'bad', 'awful'],
  },
  weight: Number,
});

// Ensure only one health log per user per day
healthDataSchema.index({ user: 1, date: 1 }, { unique: true });

module.exports = mongoose.model('HealthData', healthDataSchema);
