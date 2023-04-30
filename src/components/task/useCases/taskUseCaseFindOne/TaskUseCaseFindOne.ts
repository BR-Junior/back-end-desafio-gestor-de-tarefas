import {ITaskRepository} from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';


export class TaskUseCaseFindOne {
  constructor(private repo: ITaskRepository) {}

  async findOne(id:string):Promise<ITaskDTO | Error | string>{
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await this.repo.findOne(id);
      if (result instanceof Error) {
        return result.message;
      }
      return result as ITaskDTO;
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}