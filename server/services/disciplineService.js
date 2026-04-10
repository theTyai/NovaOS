const Task = require('../models/Task');
const Habit = require('../models/Habit');
const FocusSession = require('../models/FocusSession');
const DisciplineScore = require('../models/DisciplineScore');

/**
 * Calculate and save the daily discipline score for a user
 * @param {string} userId 
 */
exports.calculateDailyScore = async (userId) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  // 1. Task Score (30%)
  const tasks = await Task.find({
    user: userId,
    createdAt: { $lt: tomorrow },
    $or: [{ status: 'completed', completedAt: { $gte: today, $lt: tomorrow } }, { status: 'pending' }]
  });
  const completedTasks = tasks.filter(t => t.status === 'completed').length;
  const totalTasks = tasks.length;
  const taskScore = totalTasks > 0 ? (completedTasks / totalTasks) * 30 : 30; // 30 if no tasks

  // 2. Habit Score (30%)
  const habits = await Habit.find({ user: userId, isActive: true });
  const completedHabits = habits.filter(h => 
    h.logs.some(log => log.date >= today && log.date < tomorrow && log.status === 'completed')
  ).length;
  const totalHabits = habits.length;
  const habitScore = totalHabits > 0 ? (completedHabits / totalHabits) * 30 : 30;

  // 3. Focus Score (20%) - Target 4 hours (240 mins)
  const focusSessions = await FocusSession.find({
    user: userId,
    startTime: { $gte: today, $lt: tomorrow },
    wasCompleted: true,
    type: 'work'
  });
  const totalFocusMins = focusSessions.reduce((acc, s) => acc + s.duration, 0);
  const focusScore = Math.min((totalFocusMins / 240) * 20, 20);

  // 4. Coding Score (20%) - Placeholder for now, target 3 commits
  // This will be updated once GitHub integration is live
  const codingScore = 20; 

  const totalScore = Math.round(taskScore + habitScore + focusScore + codingScore);

  // Save or Update today's score
  await DisciplineScore.findOneAndUpdate(
    { user: userId, date: { $gte: today, $lt: tomorrow } },
    {
      user: userId,
      date: today,
      score: totalScore,
      breakdown: {
        tasksCompleted: completedTasks,
        focusHours: totalFocusMins / 60,
        habitsCompleted: completedHabits,
        codingActivity: 1, // placeholder
      }
    },
    { upsert: true, new: true }
  );

  return totalScore;
};
