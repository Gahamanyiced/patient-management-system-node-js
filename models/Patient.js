const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    name: String,
    address: String,
    history: String,
    diagnosis: String,
    treatment: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
