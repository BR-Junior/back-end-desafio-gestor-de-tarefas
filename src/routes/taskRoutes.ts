import {Router, Request, Response } from 'express';
import { controllers } from '../components/task/useCases';

const taskRoutes = Router();
taskRoutes.post('/task', (req:Request, res: Response) =>
  controllers.taskCreate.execute(req, res));
taskRoutes.get('/task/:id', (req:Request, res:Response) =>
  controllers.taskFindOne.execute(req.params.id, res));
taskRoutes.put('/task/:id', (req:Request, res: Response) =>
  controllers.taskUpdate.execute(req.params.id, req.body, res));

export { taskRoutes };