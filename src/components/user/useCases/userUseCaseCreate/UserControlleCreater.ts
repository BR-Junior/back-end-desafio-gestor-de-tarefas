import { Request, Response } from 'express';
import { IUserDTO } from '../../DTO/IUserDTO';
import { UserUseCaseCreate } from './UserUseCaseCreate';

export class UserControlleCreater {
  constructor(private TaskUsaCaseCreate: UserUseCaseCreate) {}
  async execute(req:Request<{}, {}, IUserDTO>, res:Response) {
    try {
      const result = await this.TaskUsaCaseCreate.create(req.body);
      if (result instanceof Error) {
        res.status(400).json({
          erro: result.message
        });
      }
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}