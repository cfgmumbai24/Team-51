import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const ConnectDB = async () => {
  try {
    const uri = process.env.MONGODB_URI;
    const connection = await mongoose.connect(uri);
    console.log(`MongoDB connected : ${connection.connection.host}`);
  } catch (error) {
    console.log("MONGODB connection FAILED ", error);
    process.exit(1);
  }
};

export default ConnectDB;
