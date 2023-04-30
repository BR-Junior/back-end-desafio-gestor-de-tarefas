import {ITaskRepository} from './ITaskRepository';
import { ITaskDTO } from '../DTO/ITaskDTO';
import { typeORMConfig } from '../../../typeORMConfig';
import { Task } from '../../../database/Task';



export class TaskRepository implements ITaskRepository{
  private repository = typeORMConfig.getRepository(Task);
  async create(task:ITaskDTO): Promise<ITaskDTO> {
    const result = await this.repository.create(task);
    await this.repository.save(result);
    return result;
  }
  async findOne(id:string):Promise<ITaskDTO | Error> {
    const result = await this.repository.findOneBy({id:id});
    if (!result) return Error('id não encontrado');
    return result as ITaskDTO;
  }
  async update(id:string, task:Omit<ITaskDTO, 'id'>):Promise<void | Error> {
    await this.repository.update(id, task);
  }
}


