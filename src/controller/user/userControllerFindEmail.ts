import {Request, Response} from 'express';
import {providerFindEmail} from '../../@core/user/useCases/userUseCaseFindEmail';

export const userControllerFindEmail = async (req:Request, res: Response) => {
  const params = req.body;


  const result = await providerFindEmail(params);
  if (result instanceof Error) return res.status(400).json(result.message);
  return res.status(200).json(result);

};