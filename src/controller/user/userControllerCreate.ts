import {Request, Response} from 'express';
import {create} from '../../core/user/useCases/userUseCaseCreate';
import {userSchemaCreate, validation} from '../../core/user/useCases/userUseCaseCreate/validationSchema';

export const userControllerCreate = async (req:Request, res: Response) => {
  const params = req.body;

  const isValid = await validation(params, userSchemaCreate);
  if (isValid.errors) return res.status(400).json(isValid);

  const result = await create(params);
  if (result instanceof Error) return result.message;
  return res.status(200).json(result);

};