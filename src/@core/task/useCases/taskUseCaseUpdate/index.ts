import {ITaskUseCaseUpdate} from './ITaskUseCaseUpdate';
import {TaskUseCaseUpdate} from './TaskUseCaseUpdate';
import {TaskRepository} from '../../repository/TaskRepository';
import {TaskEntity} from '../../entity/TaskEntity';


export const providerUpdate = async (id:string, params: ITaskUseCaseUpdate.Params): Promise<TaskEntity | Error> => {
  const taskRepository = new TaskRepository();
  const taskUseCaseUpdate = new TaskUseCaseUpdate(taskRepository);

  return await taskUseCaseUpdate.update(id, params);
};
