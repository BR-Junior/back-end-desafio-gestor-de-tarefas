import {ITaskUseCaseDelete} from './ITaskUseCaseDelete';


export class TaskUseCaseDelete implements ITaskUseCaseDelete{
  constructor(private repoUseCase: ITaskUseCaseDelete) {}

  async delete(params: ITaskUseCaseDelete.Params): Promise<void | Error> {
    return await this.repoUseCase.delete(params);
  }
}