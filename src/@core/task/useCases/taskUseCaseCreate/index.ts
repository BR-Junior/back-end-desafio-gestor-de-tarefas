import {ITaskUseCaseCreate} from './ITaskUseCaseCreate';
import {TaskRepository} from '../../repository/TaskRepository';
import {TaskUseCaseCreate} from './TaskUseCaseCreate';


export const create = async (params: ITaskUseCaseCreate.Params): Promise<ITaskUseCaseCreate.Result | Error> => {
  const taskRepository = new TaskRepository();
  const taskUseCaseCreate = new TaskUseCaseCreate(taskRepository);

  return taskUseCaseCreate.create(params);
};