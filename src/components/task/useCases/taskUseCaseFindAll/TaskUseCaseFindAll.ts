import {ITaskRepository} from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';


export class TaskUseCaseFindAll {
  constructor(private repo: ITaskRepository) {}

  async findAll(idUser:string, task:string, priority:string, status:string, creationDate:string, sort: any):Promise<ITaskDTO[] | Error>{
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await this.repo.findAll(idUser, task, priority, status, creationDate, sort);
      return result as ITaskDTO[];
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}