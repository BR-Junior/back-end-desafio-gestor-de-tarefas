import { ITaskRepositoryCreta } from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';
import { TaskEntity } from '../../entity/TaskEntity';

export class TaskUseCaseCreate {
  constructor(private repo: ITaskRepositoryCreta) {}

  async create(data:ITaskDTO): Promise<{}> {
    const result = new TaskEntity(data);
    await this.repo.create(result);
    return result;
  }
}