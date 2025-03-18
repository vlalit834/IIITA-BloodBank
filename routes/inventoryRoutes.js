import express from "express";
import { authMiddleware } from "../middlewares/authMiddleware.js";
import { createInventoryController, getInventoryController } from "../controllers/inventoryController.js";

const router = express.Router();

// Add inventory
router.post("/create-inventory", authMiddleware, createInventoryController);

//Get
router.get("/get-inventory", authMiddleware,getInventoryController);

export default router;
