import {Response} from 'express';
import {providerFindOne} from '../../@core/task/useCases/taskUseCaseFindOne';


export const taskControllerFindOne = async (req:Record<string, any>, res: Response) => {
  const params = req.params;

  const result = await providerFindOne(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);
};