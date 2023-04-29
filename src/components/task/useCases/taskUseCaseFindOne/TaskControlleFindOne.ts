import { Response } from 'express';
import { TaskUseCaseFindOne } from './TaskUseCaseFindOne';

export class TaskControlleFindOne {
  constructor(private repo: TaskUseCaseFindOne) {}

  async execute(id:string, res:Response) {

    const result = await this.repo.findOne(id);

    return res.status(200).json(result);
  }
}