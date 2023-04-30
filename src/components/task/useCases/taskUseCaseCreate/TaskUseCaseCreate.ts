import { ITaskRepository } from '../../repositories/ITaskRepository';
import { ITaskDTO } from '../../DTO/ITaskDTO';
import { TaskEntity } from '../../entity/TaskEntity';

export class TaskUseCaseCreate {
  constructor(private repo: ITaskRepository) {}
  async create(data:ITaskDTO): Promise<ITaskDTO | Error> {
    try {
      const result = new TaskEntity(data);
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.repo.create(result);
      return result as ITaskDTO;
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}