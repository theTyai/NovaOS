const mongoose = require('mongoose');

const learningModuleSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  sourceType: {
    type: String,
    enum: ['youtube', 'course-link', 'text-syllabus'],
    required: true,
  },
  sourceUrl: String,
  syllabusStructure: [
    {
      title: String,
      content: String,
      isCompleted: { type: Boolean, default: false },
      order: Number,
      estimatedHours: Number,
      relatedTasks: [{ type: mongoose.Schema.ObjectId, ref: 'Task' }],
    },
  ],
  progress: {
    type: Number,
    default: 0,
  },
  status: {
    type: String,
    enum: ['not-started', 'in-progress', 'completed'],
    default: 'not-started',
  },
  tags: [String], // e.g., ['DSA', 'WebDev']
  lastAccessed: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('LearningModule', learningModuleSchema);
