import {TaskRepository} from '../../repository/TaskRepository';
import {ITaskUseCaseFindOne} from './ITaskUseCaseFindOne';
import {TaskUseCaseFindOne} from './TaskUseCaseFindOne';


export const providerFindOne = async (params: ITaskUseCaseFindOne.Params): Promise<ITaskUseCaseFindOne.Result | Error> => {
  const taskRepository = new TaskRepository();
  const taskUseCaseDelete = new TaskUseCaseFindOne(taskRepository);

  return taskUseCaseDelete.findOne(params);
};