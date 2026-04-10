const mongoose = require('mongoose');

const codingLogSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.ObjectId,
    ref: 'User',
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  commits: {
    type: Number,
    default: 0,
  },
  repositories: [String],
  codingTime: {
    type: Number, // in minutes
    default: 0,
  },
  platforms: [
    {
      name: String, // e.g., 'GitHub', 'LeetCode'
      activity: Number,
    },
  ],
  logEntries: [
    {
      time: { type: Date, default: Date.now },
      action: String, // e.g., 'Pushed to repo-name'
    },
  ],
});

module.exports = mongoose.model('CodingLog', codingLogSchema);
