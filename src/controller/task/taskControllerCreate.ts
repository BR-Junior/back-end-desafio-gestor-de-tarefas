import {Request, Response} from 'express';
import {validation} from '../../core/user/useCases/userUseCaseCreate/validationSchema';
import {taskSchemaCreate} from '../../core/task/useCases/taskUseCaseCreate/validationSchema';
import {create} from '../../core/task/useCases/taskUseCaseCreate';


export const taskControllerCreate =  async (req:Request, res: Response) => {
  const params = req.body;

  const isValid = await validation(params, taskSchemaCreate);
  if (isValid.errors) return res.status(400).json(isValid);

  const result = await create(params);
  if (result instanceof Error) return result.message;
  return res.status(200).json(result);
};