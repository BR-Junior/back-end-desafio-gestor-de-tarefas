import {ITaskRepository} from '../../repositories/ITaskRepository';

export class TaskUseCaseDelete {
  constructor(private repo:ITaskRepository) {}

  async delete(id:string):Promise<void | Error> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.repo.delete(id);
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}