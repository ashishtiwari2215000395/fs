import mongoose from "mongoose";
import dotenv from "dotenv";

// Load .env variables
dotenv.config();

const DBConnection = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;
  console.log("MONGODB_URI:", MONGODB_URI); // Debugging line (optional)

  try {
    await mongoose.connect(MONGODB_URI); // Clean, no deprecated options
    console.log('Database connected successfully');
  } catch (error) {
    console.error('Error while connecting with the database', error.message);
  }
};

export default DBConnection;




