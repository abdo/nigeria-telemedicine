const mongoose = require('mongoose');

// Models
const Submission = mongoose.model('submission');

module.exports = (req, res) => {
  const errors = {};

  // Create new submission
  const newSubmission = new Submission({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    phoneNumber: req.body.phoneNumber,
    gender: req.body.gender,
    dateOfBirth: new Date(req.body.dateOfBirth),
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
