import {Router, Request, Response } from 'express';
import {isAuthenticated} from '../@core/shared/middleware/authenticated/IsAuthenticated';
import {
  taskControllerCreate, taskControllerDelete,
  taskControllerFindAll,
  taskControllerFindOne,
  taskControllerSearch,
  taskControllerUpdate
} from '../controller';

const taskRoutes = Router();

taskRoutes.post('/task',isAuthenticated,(req:Request, res: Response) => taskControllerCreate(req, res));
taskRoutes.put('/task/:id',(req:Request, res: Response) => taskControllerUpdate(req, res));
taskRoutes.get('/task',isAuthenticated,(req:Request, res: Response) => taskControllerFindAll(req, res));

taskRoutes.get('/task-search',isAuthenticated,(req:Request, res: Response) => taskControllerSearch(req, res));

taskRoutes.get('/task/:id',isAuthenticated,(req:Request, res: Response) => taskControllerFindOne(req, res));

taskRoutes.delete('/task/:id',isAuthenticated,(req:Request, res: Response) => taskControllerDelete(req, res));

export { taskRoutes };