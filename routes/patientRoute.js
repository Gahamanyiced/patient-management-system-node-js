const express = require('express');
const router = express.Router();

const { createPatient } = require('../controllers/patientController');

router.route('/').post(createPatient);

module.exports = router;
