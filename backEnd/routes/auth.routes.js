import express from 'express';
import { signup, login } from '../controllers/auth.controller.js';
import { authLimiter } from '../config/security.config.js';


const router = express.Router();


router.use(authLimiter);


router.post('/signup', signup);
router.post(['/login', '/signin'], login);
export default router;
