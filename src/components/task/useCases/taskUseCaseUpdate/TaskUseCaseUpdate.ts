import {ITaskRepository} from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';

export class TaskUseCaseUpdate {
  constructor(private repo:ITaskRepository) {}

  async update(id:string, task:Omit<ITaskDTO, 'id'>):Promise<void | Error> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.repo.update(id, task);
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}