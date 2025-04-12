const express = require('express');
const connectDB = require('./config/db');
const app = express();
const patientRoute = require('./routes/patientRoute');

//DB connection

connectDB();

app.use(express.json());
app.use('/api/v1/patient', patientRoute);

app.get(
  '/patient',

  (req, res, next) => {
    res.send('Hello');
  }
);

const PORT = 8000;

app.listen(PORT, () => {
  console.log(`Server is running on POrt ${PORT}`);
});
