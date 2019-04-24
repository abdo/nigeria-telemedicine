const express = require('express');

const router = express.Router();

const submissionController = require('../controllers/submissionController/index.js');

// @route  POST api/submission
// @desc   Create new submission
// @access Public
// @errors error
// @body   name phoneNumber complaint
router.post('/', submissionController.createSubmission);

// @route  GET api/submission/all
// @desc   Get all submissions
// @access Public
// @errors nodcs error
router.get('/all', submissionController.getAllSubmissions);

module.exports = router;
