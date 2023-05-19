import {TaskRepository} from '../../repository/TaskRepository';
import {TaskUseCaseDelete} from './TaskUseCaseDelete';
import {ITaskUseCaseDelete} from './ITaskUseCaseDelete';


export const providerDelete = async (params: ITaskUseCaseDelete.Params) => {
  const taskRepository = new TaskRepository();
  const taskUseCaseDelete = new TaskUseCaseDelete(taskRepository);

  return taskUseCaseDelete.delete(params);
};