const mongoose = require('mongoose');

// Models
const Submission = mongoose.model('submission');

module.exports = (req, res) => {
  const errors = {};

  Submission.find()
    .sort({ date: -1 })
    .then(submissions => res.json(submissions))
    .catch((err) => {
      errors.error = 'Error fetching submissions from database';
      res.status(500).json({ ...errors, ...err });
    });
};
