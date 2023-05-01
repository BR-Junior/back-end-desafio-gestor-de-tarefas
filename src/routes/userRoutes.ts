import {Router, Request, Response } from 'express';
import { controllerUser } from  '../components/user';
import { isAuthenticated } from '../shared';


const userRoutes = Router();
userRoutes.post('/entrar',isAuthenticated
  ,(req:Request, res: Response) =>
    controllerUser.Signin.execute(req, res));

userRoutes.post('/cadastrar',(req:Request, res: Response) =>
  controllerUser.SignUp.execute(req, res));



export { userRoutes };