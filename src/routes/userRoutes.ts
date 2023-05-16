import {Router, Request, Response } from 'express';
import { controllerUser } from  '../components/user';
import {create} from '../core/user/useCases/userUseCaseCreate';
import {userControllerCreate} from '../controller/user/userControllerCreate';
import {userControllerFindEmail} from '../controller/user/userControllerFindEmail';

const userRoutes = Router();
userRoutes.post('/entrar'
  ,(req:Request, res: Response) =>
    controllerUser.Signin.execute(req, res));

userRoutes.post('/cadastrar', controllerUser.signUpValidation,
  (req:Request, res: Response) =>
    controllerUser.SignUp.execute(req, res));


userRoutes.post('/user', (req:Request, res: Response) => userControllerCreate(req, res));
userRoutes.post('/user-tra', (req:Request, res: Response) => userControllerFindEmail(req, res));


export { userRoutes };