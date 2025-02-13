import express from "express";
import {
  currentUserController,
  loginController,
  registerController,
} from "../controllers/authController.js";
import { authMiddleware } from "../middlewares/authMiddleware.js";
const router = express.Router();

//Post register
router.post("/register", registerController);

//Post Login
router.post("/login", loginController);

//Get Current User Controller
router.get("/current-user", authMiddleware, currentUserController);

export default router;
