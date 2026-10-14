import express from 'express';
import { analyze, getAnalyses, getAnalysisById } from '../controllers/analysis.controller.js';
import { requireAuth } from '../middlewares/auth.middleware.js';
import { uploadMiddleware } from '../middlewares/upload.middleware.js';


const router = express.Router();


router.use(requireAuth);


// Base router endpoints
router.get('/', getAnalyses);
router.get('/:id', getAnalysisById);
router.post('/analyze', uploadMiddleware.single('resume'), analyze);


export default router;
