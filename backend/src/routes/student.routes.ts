import { Router } from 'express';
import { getAllStudents, getProfile, updateProfile, payFees } from '../controllers/student.controller';
import { authenticateToken } from '../middleware/auth.middleware';

const router = Router();

router.get('/students', authenticateToken, getAllStudents);
router.get('/profile', authenticateToken, getProfile);
router.put('/profile', authenticateToken, updateProfile);
router.put('/profile/pay', authenticateToken, payFees);

export default router; 