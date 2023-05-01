import {Router, Request, Response } from 'express';
import { controllers } from '../components/task/useCases';
import { isAuthenticated } from '../shared';


const taskRoutes = Router();
taskRoutes.post('/task', controllers.taskValidationCreate,
  (req:Request, res: Response) => controllers.taskCreate.execute(req, res));

taskRoutes.get('/task/:id',controllers.taskValidationFindOne,
  (req:Request, res:Response) =>
    controllers.taskFindOne.execute(req.params.id, res));
taskRoutes.get('/task',
  (req:Request<{}, {}, {}, string>, res:Response) =>
    controllers.taskFindAll.execute(req.query, res));
taskRoutes.put('/task/:id',controllers.taskValidationUpdate,
  (req:Request, res: Response) =>
    controllers.taskUpdate.execute(req.params.id, req.body, res));
taskRoutes.delete('/task/:id', controllers.taskValidationDelete,
  (req:Request, res: Response) =>
    controllers.taskDelete.execute(req.params.id, res));

export { taskRoutes };