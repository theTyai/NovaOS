const mongoose = require('mongoose');

const taskSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
  },
  description: {
    type: String,
  },
  priority: {
    type: String,
    enum: ['low', 'medium', 'high', 'critical'],
    default: 'medium',
  },
  status: {
    type: String,
    enum: ['pending', 'in-progress', 'completed', 'archived'],
    default: 'pending',
  },
  tags: [String],
  dueDate: {
    type: Date,
  },
  isRecurring: {
    type: Boolean,
    default: false,
  },
  recurrenceRule: {
    type: String, // e.g., 'daily', 'weekly', 'monthly'
  },
  aiSuggestions: {
    estimatedTime: Number, // in minutes
    difficulty: { type: String, enum: ['easy', 'moderate', 'hard'] },
  },
  completedAt: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Task', taskSchema);
