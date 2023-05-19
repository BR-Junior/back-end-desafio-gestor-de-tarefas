import {Response} from 'express';
import {providerUpdate} from '../../@core/task/useCases/taskUseCaseUpdate';
import {taskSchemaUpdate} from '../../@core/task/useCases/taskUseCaseUpdate/validationSchema';
import {validation} from '../../@core/shared/services/validation/validation';


export const taskControllerUpdate = async (req:Record<string, any>, res: Response) => {
  const id = req.params;
  const params = req.body;

  const isValid = await validation(params, taskSchemaUpdate);
  if (isValid.errors) return res.status(400).json(isValid);

  const result = await providerUpdate(id, params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};