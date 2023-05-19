import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseFindAll} from '../../src/@core/task/useCases/taskUseCaseFindAll/taskUseCaseFindAll';
import {ITaskUseCaseFindAll} from '../../src/@core/task/useCases/taskUseCaseFindAll/ITaskUseCaseFindAll';

describe('find all task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindAll = new TaskUseCaseFindAll(taskRepository);

  test('should be able to find all task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseFindAll.Params = {idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c'};
    const task = await taskUseCaseFindAll.findAll(params);
    expect(Array.isArray(task)).toBe(true);
  });

});