const mongoose = require('mongoose');

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect(
      'mongodb+srv://test:Rwandamongodb123!@cluster0.tzvcdof.mongodb.net/nodeproject'
    );
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
  }
};

module.exports = connectDB;
