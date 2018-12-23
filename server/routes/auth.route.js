import express from 'express';
import controller from '../controllers/auth.controller';

const router = express.Router();

router.post('/login', controller.acquireOneByEmail);
router.post('/signup', controller.addUser);

export default router;