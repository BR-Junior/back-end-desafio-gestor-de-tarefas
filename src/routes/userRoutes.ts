import {Router, Request, Response } from 'express';
import { controllerUser } from  '../components/user';

const userRoutes = Router();
userRoutes.post('/entrar'
  ,(req:Request, res: Response) =>
    controllerUser.Signin.execute(req, res));

userRoutes.post('/cadastrar', controllerUser.signUpValidation,
  (req:Request, res: Response) =>
    controllerUser.SignUp.execute(req, res));



export { userRoutes };