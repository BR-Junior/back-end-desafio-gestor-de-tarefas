import { Request, Response } from 'express';
import { IUserDTO } from '../../DTO/IUserDTO';
import { UserUseCaseFindOneEmail } from './UserUseCaseFindOneEmail';

export class UserControlleFindOneEmail {
  constructor(private UserUseCaseFindOneEmail: UserUseCaseFindOneEmail) {}
  async execute(req:Request<{}, {}, IUserDTO>, res:Response) {
    try {
      const result = await this.UserUseCaseFindOneEmail.findOneEmail(req.body);
      if (result instanceof Error) {
        res.status(400).json({
          error: { message: result.message }
        });
      }
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}