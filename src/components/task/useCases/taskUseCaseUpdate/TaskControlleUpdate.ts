import { TaskUseCaseUpdate } from './TaskUseCaseUpdate';
import { ITaskDTO } from '../../DTO/ITaskDTO';
import { Response } from 'express';


export class TaskControlleUpdate {
  constructor(private repo:TaskUseCaseUpdate) {}
  async execute(id: string, task:Omit<ITaskDTO, 'id'>, res:Response) {
    try {
      const result = await this.repo.update(id, task);
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}