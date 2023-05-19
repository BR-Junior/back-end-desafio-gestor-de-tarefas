import {Response} from 'express';
import {providerDelete} from '../../@core/task/useCases/taskUseCaseDelete';


export const taskControllerDelete = async (req:Record<string, any>, res: Response) => {
  const params = req.params;

  const result = await providerDelete(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};