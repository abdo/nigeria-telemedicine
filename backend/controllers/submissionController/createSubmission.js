const mongoose = require('mongoose');

// Models
const Submission = mongoose.model('submission');

module.exports = (req, res) => {
  const errors = {};

  // Create new submission
  const newSubmission = new Submission({
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    complaint: req.body.complaint,
  });

  newSubmission
    .save()
    .then((savedSubmission) => {
      res.json(savedSubmission);
    })
    .catch((dbError) => {
      errors.error = 'Error saving submission to database';
      return res.status(500).json({ ...errors, ...dbError });
    });
};
