import {ITaskRepository} from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';


export class TaskUseCaseFindAll {
  constructor(private repo: ITaskRepository) {}

  async findAll(id:string, priority:string, creationDate:string):Promise<ITaskDTO[] | Error>{
    try {
      if (!id) return Error('id ogrigarotio');
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await this.repo.findAll(id, priority, creationDate);
      return result as ITaskDTO[];
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}