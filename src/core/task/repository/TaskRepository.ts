import {typeORMConfig} from '../../../typeORMConfig';
import {Task} from '../../../database/Task';
import {ITaskUseCaseCreate} from '../useCases/taskUseCaseCreate/ITaskUseCaseCreate';


export class TaskRepository implements
  ITaskUseCaseCreate{
  private repoDb = typeORMConfig.getRepository(Task);

  async create(params: ITaskUseCaseCreate.Params): Promise<ITaskUseCaseCreate.Result | Error> {
    try {
      const result = await this.repoDb.create(params);
      return await this.repoDb.save(result);

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

}