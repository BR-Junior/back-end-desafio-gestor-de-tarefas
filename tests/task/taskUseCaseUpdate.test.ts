import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseUpdate} from '../../src/@core/task/useCases/taskUseCaseUpdate/TaskUseCaseUpdate';
import {ITaskUseCaseUpdate} from '../../src/@core/task/useCases/taskUseCaseUpdate/ITaskUseCaseUpdate';
import {IPriority, IStatus} from '../../src/@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';

describe('task update', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseUpdate = new TaskUseCaseUpdate(taskRepository);
  const id = '99fe082f-650b-4752-b9f3-d25a91872ed0';

  test('should be able to update a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseUpdate.Params = {
      id: id,
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    };
    const task = await taskUseCaseUpdate.update(id, params);
    expect(task).toEqual({
      creationDate: '16/05/2023',
      id: id,
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    });
  });
});