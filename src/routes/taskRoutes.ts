import {Router, Request, Response } from 'express';
import { controllers } from '../components/task/useCases';
import { isAuthenticated } from '../shared';
import {ITaskBucaDTO, ITaskDTO} from '../components/task/DTO/ITaskDTO';


const taskRoutes = Router();
taskRoutes.post('/task', isAuthenticated,
  controllers.taskValidationCreate,
  (req:Request, res: Response) => controllers.taskCreate.execute(req, res));

taskRoutes.get('/task/:id',isAuthenticated,
  controllers.taskValidationFindOne,
  (req:Request, res:Response) =>
    controllers.taskFindOne.execute(req.params.id, res));
taskRoutes.get('/task',isAuthenticated,
  (req:Request, res:Response) =>
    controllers.taskFindAll.execute(req.query, res));
taskRoutes.put('/task/:id',isAuthenticated,
  controllers.taskValidationUpdate,
  (req:Request, res: Response) =>
    controllers.taskUpdate.execute(req.params.id, req.body, res));
taskRoutes.delete('/task/:id',isAuthenticated,
  controllers.taskValidationDelete,
  (req:Request, res: Response) =>
    controllers.taskDelete.execute(req.params.id, res));

taskRoutes.get('/task-search',
  (req:Request, res:Response) => controllers.taskSearch.excute(req.body, res));

export { taskRoutes };