import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseCreate} from '../../src/@core/task/useCases/taskUseCaseCreate/TaskUseCaseCreate';
import {IPriority, IStatus} from '../../src/@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../src/database/User';

describe('Create task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseCreate = new TaskUseCaseCreate(taskRepository);
  const idUser = 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c';

  test('should be able to create a task', async () => {
    const task = await taskUseCaseCreate.create({
      task: 'Felicia',
      priority: 'normal' as IPriority,
      status: 'open' as IStatus,
      idUser: idUser as DeepPartial<User>
    });
    expect(task).toEqual({
      task: 'Felicia',
      priority: 'normal',
      status: 'open',
      idUser: idUser,
      id: expect.any(String),
      creationDate: new Date().toLocaleString()
    });
  });

});