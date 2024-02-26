const mongoose = require('mongoose');

const databaseConnect = async function () {
  try {
    await mongoose.connect(`${process.env.MONGODB_URL}/${process.env.DATABASE}`);
    console.log('Connected to database');
  } catch (err) {
    console.error('Connection error', err);
  }
};

module.exports = { databaseConnect };
