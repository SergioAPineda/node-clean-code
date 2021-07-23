const mongoose = require('mongoose');
require('dotenv').config();

async function makeConnection() {
  await mongoose
    .connect(process.env.CONNECTION_STRING, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((db) => console.log('Connected to Mongo Atlas'))
    .catch((err) => console.log('error: ', err));
};

module.exports = makeConnection; 