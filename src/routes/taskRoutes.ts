import {Router, Request, Response } from 'express';
import { controllers } from '../components/task/useCases';
import { isAuthenticated } from '../shared';
import {taskControllerCreate} from '../controller/task/taskControllerCreate';
import {taskControllerFindAll} from '../controller/task/taskControllerFindAll';
import {taskControllerDelete} from '../controller/task/taskControllerDelete';
import {taskControllerFindOne} from '../controller/task/taskControllerFindOne';
import {taskControllerUpdate} from '../controller/task/taskControllerUpdate';


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

// taskRoutes.get('/task-search',taskControllerUpdate
//   (req:Request, res:Response) => controllers.taskSearch.excute(req, res));


taskRoutes.post('/task-new',(req:Request, res: Response) => taskControllerCreate(req, res));
taskRoutes.put('/task-new-update/:id',(req:Request, res: Response) => taskControllerUpdate(req, res));
taskRoutes.get('/task-new-get-all',(req:Request, res: Response) => taskControllerFindAll(req, res));

taskRoutes.get('/task-new-get/:id',(req:Request, res: Response) => taskControllerFindOne(req, res));

taskRoutes.delete('/task-new-delete/:id',(req:Request, res: Response) => taskControllerDelete(req, res));

export { taskRoutes };