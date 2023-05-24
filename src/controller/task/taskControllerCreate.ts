import {Request, Response} from 'express';
import {taskSchemaCreate} from '../../@core/task/useCases/taskUseCaseCreate/validationSchema';
import {create} from '../../@core/task/useCases/taskUseCaseCreate';
import {validation} from '../../@core/shared/services/validation/validation';


export const taskControllerCreate =  async (req:Request, res: Response) => {
  const params = req.body;

  // const isValid = await validation(params, taskSchemaCreate);
  // if (isValid.errors) return res.status(400).json(isValid);

  const result = await create(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};