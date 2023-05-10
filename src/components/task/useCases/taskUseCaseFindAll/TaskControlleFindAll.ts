import { Response } from 'express';
import { TaskUseCaseFindAll } from './TaskUseCaseFindAll';


export class TaskControlleFindAll {
  constructor(private repo: TaskUseCaseFindAll) {}

  async execute(data:Record<string, any>, res:Response) {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { idUser, task, priority, status, creationDate, sort } = data;
    try {
      const result = await this.repo.findAll(idUser, task, priority, status, creationDate, sort);
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