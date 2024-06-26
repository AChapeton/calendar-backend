const mongoose = require('mongoose')

const dbConnection = async () => {
  try{
    await mongoose.connect(process.env.DB_CNN, {
      useNewUrlParser: true
    });
    console.log('DB Online')
  }catch(error){
    console.log(error);
    throw new Error('Error starting DB connection')
  }
}

module.exports = {
  dbConnection
}