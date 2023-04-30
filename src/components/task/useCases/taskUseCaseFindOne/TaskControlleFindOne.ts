import { Response } from 'express';
import { TaskUseCaseFindOne } from './TaskUseCaseFindOne';

export class TaskControlleFindOne {
  constructor(private repo: TaskUseCaseFindOne) {}

  async execute(id:string, res:Response) {
    try {
      if (!id) {
        return res.status(400).json({
          erro: 'id inválido'
        });
      }
      const result = await this.repo.findOne(id);
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}