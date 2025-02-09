import express from "express";
import { loginController, registerController } from "../controllers/authController.js";
const router = express.Router();

//Post register
router.post("/register", registerController);

//Post Login
router.post("/login",loginController)


export default router;
