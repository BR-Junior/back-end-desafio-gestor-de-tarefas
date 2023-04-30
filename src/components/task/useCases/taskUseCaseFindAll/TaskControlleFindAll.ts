import { Response } from 'express';
import { TaskUseCaseFindAll } from './TaskUseCaseFindAll';

export class TaskControlleFindAll {
  constructor(private repo: TaskUseCaseFindAll) {}

  async execute(data:string, res:Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { id, priority, creationDate } = data;
    try {
      const result = await this.repo.findAll(id, priority, creationDate);
      if (result instanceof Error) {
        return res.status(400).json(result.message);
      }
      return res.status(200).json(result);
    }catch (err) {
      console.log(err);
      return Error('Erro interno');
    }
  }
}