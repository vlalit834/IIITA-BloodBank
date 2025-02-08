import mongoose from "mongoose";
import colors from "colors";
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${process.env.DB_NAME}`.bgGreen.black);
  } catch (error) {
    console.error(`Error: ${error.message}`.bgRed.black);
    process.exit(1);
  }
};
export default connectDB;
