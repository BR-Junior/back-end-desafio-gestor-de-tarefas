import {ITaskUseCaseSearch} from './ITaskUseCaseSearch';
import {TaskEntity} from '../../entity/TaskEntity';


export class TaskUseCaseSearch implements ITaskUseCaseSearch{
  constructor(private repoUseCase: ITaskUseCaseSearch) {}

  async search(params: ITaskUseCaseSearch.Params): Promise<TaskEntity | TaskEntity[] | Error> {
    return await this.repoUseCase.search(params);
  }
}