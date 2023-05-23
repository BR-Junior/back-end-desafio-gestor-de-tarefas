import {Router, Request, Response } from 'express';
import {userControllerCreate, userControllerFindEmail} from '../controller';

const userRoutes = Router();

userRoutes.post('/cadastrar', (req:Request, res: Response) => userControllerCreate(req, res));
userRoutes.post('/entrar', (req:Request, res: Response) => userControllerFindEmail(req, res));


export { userRoutes };