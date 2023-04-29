import {Router, Request, Response } from 'express';
import { controllers } from '../components/task/useCases';

const taskRoutes = Router();
taskRoutes.post('/task', (req:Request, res: Response) => controllers.taskCreate.execute(req, res));


export { taskRoutes };