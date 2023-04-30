import { TaskUseCaseDelete } from './TaskUseCaseDelete';
import { Response } from 'express';


export class TaskControlleDelete {
  constructor(private repo:TaskUseCaseDelete) {}
  async execute(id: string,res:Response) {
    try {
      const result = await this.repo.delete(id);
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}