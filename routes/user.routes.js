import express from 'express';
const router = express.Router();
// import { authenticateToken } from '../middlewares/auth.middleware.js';
import { signup, login, getAllUsers } from '../controllers/user.controllers.js';

//router.get('/getAllUsers', getAllUsers);
router.post('/signup', signup);
router.post('/login', login);

export default router;
