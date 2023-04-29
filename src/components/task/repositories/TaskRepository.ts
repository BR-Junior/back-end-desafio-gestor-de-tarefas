import { ITaskRepositoryCreta } from './ITaskRepository';
import { ITaskDTO } from '../DTO/ITaskDTO';
import {Task} from '../../../database/Task';
import { typeORMConfig } from '../../../typeORMConfig';



export class TaskRepository implements ITaskRepositoryCreta{
  private repository = typeORMConfig.getRepository(Task);
  async create(task: ITaskDTO): Promise<string> {
    const result = await this.repository.create(task);
    await this.repository.save(result);
    return result.id;
  }
}

