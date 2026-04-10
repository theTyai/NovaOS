const Habit = require('../models/Habit');

// @desc    Get all habits
// @route   GET /api/v1/habits
// @access  Private
exports.getHabits = async (req, res, next) => {
  try {
    const habits = await Habit.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      count: habits.length,
      data: habits,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Create new habit
// @route   POST /api/v1/habits
// @access  Private
exports.createHabit = async (req, res, next) => {
  try {
    req.body.user = req.user.id;

    const habit = await Habit.create(req.body);

    res.status(201).json({
      success: true,
      data: habit,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Log habit completion
// @route   POST /api/v1/habits/:id/log
// @access  Private
exports.logHabit = async (req, res, next) => {
  try {
    const { status } = req.body; // 'completed', 'skipped', 'failed'
    let habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found' });
    }

    if (habit.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    // Add log
    habit.logs.push({ status });

    // Update streak if completed
    if (status === 'completed') {
      habit.streak += 1;
      if (habit.streak > habit.bestStreak) {
        habit.bestStreak = habit.streak;
      }
    } else if (status === 'failed') {
      habit.streak = 0;
    }

    await habit.save();

    res.status(200).json({
      success: true,
      data: habit,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Delete habit
// @route   DELETE /api/v1/habits/:id
// @access  Private
exports.deleteHabit = async (req, res, next) => {
  try {
    const habit = await Habit.findById(req.params.id);

    if (!habit) {
      return res.status(404).json({ success: false, error: 'Habit not found' });
    }

    if (habit.user.toString() !== req.user.id) {
      return res.status(401).json({ success: false, error: 'Not authorized' });
    }

    await habit.deleteOne();

    res.status(200).json({
      success: true,
      data: {},
    });
  } catch (err) {
    next(err);
  }
};
