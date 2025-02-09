import express from "express";
import testRoutes from "./routes/testRoutes.js";
import dotenv from "dotenv";
import colors from "colors";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";

// Load environment variables
dotenv.config(); //
// Connect to MongoDB
connectDB();

// Express app setup
const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/v1/", testRoutes);
app.use("/api/v1/auth",authRoutes);

// Port
const PORT = process.env.PORT || 8080;

// Start server
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`.bgGreen.black);
});
