require('dotenv').config(); 

module.exports = {
  // MongoDB Connection
  mongoURI: process.env.MONGO_URI || 'mongodb://localhost:27017/schoolbridge',

  port: process.env.PORT || 3000,

};
