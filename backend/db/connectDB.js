const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.DATABASE_URL);

    console.log("\tMongoDB connected successfully");
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
