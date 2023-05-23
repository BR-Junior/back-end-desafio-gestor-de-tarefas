import {ITaskUseCaseUpdate} from './ITaskUseCaseUpdate';
import {TaskEntity} from '../../entity/TaskEntity';


export class TaskUseCaseUpdate implements ITaskUseCaseUpdate{
  constructor(private repoUseCse: ITaskUseCaseUpdate) {}

  async update(id:string, params: ITaskUseCaseUpdate.Params): Promise<TaskEntity | Error> {
    return await this.repoUseCse.update(id, params);
  }
}