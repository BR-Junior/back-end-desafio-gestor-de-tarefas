import { ITaskRepositoryCreta } from './ITaskRepository';
import { ITaskDTO } from '../DTO/ITaskDTO';
import { typeORMConfig } from '../../../typeORMConfig';
import { Task } from '../../../database/Task';





export class TaskRepository implements ITaskRepositoryCreta{
  private repository = typeORMConfig.getRepository(Task);
  async create(task:ITaskDTO): Promise<{}> {
    const result = await this.repository.create(task);
    await this.repository.save(result);
    return result;
  }

  async findOne(id:string):Promise<any> {
    const result = await this.repository.findOneBy({id:id});
    if (result) return result;
  }
}

