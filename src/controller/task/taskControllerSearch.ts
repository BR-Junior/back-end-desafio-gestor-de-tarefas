import {Response} from 'express';
import {providerSearch} from '../../core/task/useCases/taskUseCaseSearch';


export const taskControllerSearch = async (req:Record<string, any>, res: Response) => {
  const params = req.query;

  const result = await providerSearch(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};