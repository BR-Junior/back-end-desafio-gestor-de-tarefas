import {ITaskUseCaseFindAll} from './ITaskUseCaseFindAll';


export class TaskUseCaseFindAll implements ITaskUseCaseFindAll{
  constructor(private repoUseCase: ITaskUseCaseFindAll) {}

  async findAll(params: ITaskUseCaseFindAll.Params): Promise<ITaskUseCaseFindAll.Result[] | Error> {
    return  await this.repoUseCase.findAll(params);
  }
}