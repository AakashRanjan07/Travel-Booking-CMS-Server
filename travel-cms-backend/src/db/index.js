import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017";
    const DB_NAME = process.env.DB_NAME || "defaultDB";
    const connection = await mongoose.connect(`${MONGODB_URI}/${DB_NAME}`);
    console.log("MongoDB connected!");
  } catch (error) {
    console.log("MONGODB connection FAILED", error);
    process.exit(1);
  }
};

export default connectDB;
