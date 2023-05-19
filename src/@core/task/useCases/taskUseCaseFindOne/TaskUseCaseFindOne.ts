import {ITaskUseCaseFindOne} from './ITaskUseCaseFindOne';


export class TaskUseCaseFindOne implements ITaskUseCaseFindOne{
  constructor(private repoUseCase: ITaskUseCaseFindOne) {}

  async findOne(params: ITaskUseCaseFindOne.Params): Promise<ITaskUseCaseFindOne.Result | Error> {
    return this.repoUseCase.findOne(params);
  }
}