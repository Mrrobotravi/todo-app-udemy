const mongoose = require("mongoose");

// const connectionUrl = "mongodb://0.0.0.0:27017/todoDb"

const connectMongodb = async() =>{
  try {
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log("conection database successful");
  } catch (error) {
     console.log(error.message);
     process.exit(1)
  } 
};

module.exports = connectMongodb;

