import express from 'express';
import { testController } from '../controllers/testController.js';

// Router object 
const router = express.Router();

// Routes
router.get('/', testController);

// Export
export default router;
