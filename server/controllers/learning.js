const LearningModule = require('../models/LearningModule');
const { generateSyllabus } = require('../services/aiService');

// @desc    Create learning module from source
// @route   POST /api/v1/learning
// @access  Private
exports.createLearningModule = async (req, res, next) => {
  try {
    const { title, sourceType, sourceUrl, rawContent } = req.body;

    // 1. Generate structured syllabus using AI
    const syllabus = await generateSyllabus(rawContent || sourceUrl, sourceType);

    // 2. Create the module in DB
    const learningModule = await LearningModule.create({
      user: req.user.id,
      title,
      sourceType,
      sourceUrl,
      syllabusStructure: syllabus,
    });

    res.status(201).json({
      success: true,
      data: learningModule,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Get all learning modules
// @route   GET /api/v1/learning
// @access  Private
exports.getLearningModules = async (req, res, next) => {
  try {
    const modules = await LearningModule.find({ user: req.user.id });

    res.status(200).json({
      success: true,
      data: modules,
    });
  } catch (err) {
    next(err);
  }
};

// @desc    Update progress in a module
// @route   PUT /api/v1/learning/:id/progress
// @access  Private
exports.updateProgress = async (req, res, next) => {
  try {
    const { syllabusIndex, isCompleted } = req.body;
    const learningModule = await LearningModule.findById(req.params.id);

    if (!learningModule) {
      return res.status(404).json({ success: false, error: 'Module not found' });
    }

    learningModule.syllabusStructure[syllabusIndex].isCompleted = isCompleted;

    // Recalculate overall progress
    const completedCount = learningModule.syllabusStructure.filter(s => s.isCompleted).length;
    learningModule.progress = Math.round((completedCount / learningModule.syllabusStructure.length) * 100);

    await learningModule.save();

    res.status(200).json({
      success: true,
      data: learningModule,
    });
  } catch (err) {
    next(err);
  }
};
