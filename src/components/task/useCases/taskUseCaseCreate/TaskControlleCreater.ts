import { Request, Response } from 'express';
import { ITaskDTO } from '../../DTO/ITaskDTO';
import { TaskUseCaseCreate } from './TaskUseCaseCreate';

export class TaskControlleCreater {
  constructor(private TaskUsaCaseCreate: TaskUseCaseCreate) {}
  async execute(req:Request<{}, {}, ITaskDTO>, res:Response) {
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