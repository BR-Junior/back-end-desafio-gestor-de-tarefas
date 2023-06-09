import { Router } from 'express';
import { taskRoutes } from './taskRoutes';
import { userRoutes } from './userRoutes';

const router = Router();

router.use(userRoutes);

router.use(taskRoutes);

export { router };