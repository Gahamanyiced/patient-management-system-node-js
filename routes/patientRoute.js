const express = require('express');
const router = express();

const { createPatient } = require('../controllers/patientController');

router.route('/').post(createPatient);

module.exports = router;
