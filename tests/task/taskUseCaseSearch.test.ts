import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseSearch} from '../../src/@core/task/useCases/taskUseCaseSearch/TaskUseCaseSearch';
import {ITaskUseCaseSearch} from '../../src/@core/task/useCases/taskUseCaseSearch/ITaskUseCaseSearch';

describe('task Search', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseSearch = new TaskUseCaseSearch(taskRepository);

  test('should be able to Search task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseSearch.Params = {task: 'task'};
    const task = await taskUseCaseSearch.search(params);
    expect(task).not.toBeInstanceOf(Error);
  });
});