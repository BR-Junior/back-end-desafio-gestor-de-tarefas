import {Request, Response} from 'express';
import {providerFindAll} from '../../core/task/useCases/taskUseCaseFindAll';


export const taskControllerFindAll = async (req:Record<string, any>, res: Response) => {
  const params = req.query;

  const result = await providerFindAll(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};