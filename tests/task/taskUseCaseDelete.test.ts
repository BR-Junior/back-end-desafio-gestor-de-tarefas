import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseDelete} from '../../src/@core/task/useCases/taskUseCaseDelete/TaskUseCaseDelete';
import {ITaskUseCaseDelete} from '../../src/@core/task/useCases/taskUseCaseDelete/ITaskUseCaseDelete';

describe('task delete', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseDelete = new TaskUseCaseDelete(taskRepository);

  test('should be able to delete a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const id: ITaskUseCaseDelete.Params = 'b9212fb2-2620-4086-ba88-d9050e25bb89';
    const task = await taskUseCaseDelete.delete(id);
    expect(task).not.toBeInstanceOf(Error);
  });
});