import {ITaskUseCaseCreate} from './ITaskUseCaseCreate';
import {TaskEntity} from '../../entity/TaskEntity';
import {validation} from '../../../shared/services/validation/validation';


export class TaskUseCaseCreate implements ITaskUseCaseCreate{
  constructor(private repoUseCase: ITaskUseCaseCreate) {}

  async create(params: ITaskUseCaseCreate.Params): Promise<ITaskUseCaseCreate.Result | Error> {
    try {
      const taskEntity = new TaskEntity(params.task, params.priority, params.status, params.idUser);
      const isValid = await taskEntity.validation();
      if (isValid && isValid.errors) return isValid;

      const result= await this.repoUseCase.create(taskEntity);
      if (result instanceof Error) return new Error(result.message);
      return result;

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}