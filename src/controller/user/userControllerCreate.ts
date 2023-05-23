import {Request, Response} from 'express';
import {providerCreate} from '../../@core/user/useCases/userUseCaseCreate';
import {userSchemaCreate} from '../../@core/user/useCases/userUseCaseCreate/validationSchema';
import {validation} from '../../@core/shared/services/validation/validation';

export const userControllerCreate = async (req:Request, res: Response) => {
  const params = req.body;

  const isValid = await validation(params, userSchemaCreate);
  if (isValid.errors) return res.status(400).json(isValid);

  const result = await providerCreate(params);
  if (result instanceof Error) return result.message;
  return res.status(200).json(result);
};