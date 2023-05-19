import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseFindOne} from '../../src/@core/task/useCases/taskUseCaseFindOne/TaskUseCaseFindOne';
import {ITaskUseCaseFindOne} from '../../src/@core/task/useCases/taskUseCaseFindOne/ITaskUseCaseFindOne';

describe('find one task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindOne = new TaskUseCaseFindOne(taskRepository);

  test('should be able to find a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseFindOne.Params = {idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c'};
    const task = await taskUseCaseFindOne.findOne(params);
    expect(task).toEqual({
      creationDate: '30/04/2023',
      id: 'feaa99c1-287b-4a3d-ba8a-2b69b24aae70',
      priority: 'high',
      status: 'open',
      task: 'task é obrigatoria'
    });
  });
});