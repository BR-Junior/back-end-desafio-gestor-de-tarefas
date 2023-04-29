import {Request, Response, Router} from 'express';
import { taskRoutes } from './taskRoutes';
// import { controllers } from '../components/task/useCases';

const router = Router();


router.get('/', (req:Request, res:Response) => {
  return res.status(200).send('Hello word!');
});

// router.post('/task', (req:Request, res: Response) => controllers.taskCreate.execute(req, res));

router.use(taskRoutes);

export { router };