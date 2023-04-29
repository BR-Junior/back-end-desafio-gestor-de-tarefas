import { ITaskRepositoryFindOne } from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';


export class TaskUseCaseFindOne {
  constructor(private repo: ITaskRepositoryFindOne) {}

  async findOne(id:string):Promise<ITaskDTO>{
    const result = await this.repo.findOne(id);
    return result;
  }
}