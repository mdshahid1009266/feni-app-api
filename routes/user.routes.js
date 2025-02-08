import express from 'express';
const router = express.Router();
// import { authenticateToken } from '../middlewares/auth.middleware.js';
import { signup, login } from '../controllers/user.controllers.js';

router.post('/signup', signup);
router.post('/login', login);

export default router;