import {ITaskUseCaseFindAll} from './ITaskUseCaseFindAll';
import {TaskRepository} from '../../repository/TaskRepository';
import {TaskUseCaseFindAll} from './taskUseCaseFindAll';


export const providerFindAll = async (params: ITaskUseCaseFindAll.Params): Promise<ITaskUseCaseFindAll.Result[] | Error> => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindAll = new TaskUseCaseFindAll(taskRepository);

  return taskUseCaseFindAll.findAll(params);
};