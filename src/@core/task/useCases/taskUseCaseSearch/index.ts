import {ITaskUseCaseSearch} from './ITaskUseCaseSearch';
import {TaskRepository} from '../../repository/TaskRepository';
import {TaskUseCaseSearch} from './TaskUseCaseSearch';
import {TaskEntity} from '../../entity/TaskEntity';


export const providerSearch = async (params: ITaskUseCaseSearch.Params): Promise<ITaskUseCaseSearch.Result[] | Error> => {
  const taskRepository = new TaskRepository();
  const taskUseCaseSearch = new TaskUseCaseSearch(taskRepository);

  return taskUseCaseSearch.search(params);
};