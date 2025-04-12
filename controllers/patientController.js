const Patient = require('../models/Patient');

const createPatient = async (req, res) => {
  try {
    // const { name, address, history, diagnosis, treatment } = req.body;
    const patient = await Patient.create(req.body);
    res.status(201).json({
      success: true,
      data: patient,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
    console.log(error.messsage);
  }
};

module.exports = { createPatient };
