import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseCreate} from '../../src/@core/task/useCases/taskUseCaseCreate/TaskUseCaseCreate';
import {IPriority, IStatus} from '../../src/@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../src/database/User';
import {providerFindEmail} from '../../src/@core/user/useCases/userUseCaseFindEmail';
import {providerCreate} from '../../src/@core/user/useCases/userUseCaseCreate';

describe('Create task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseCreate = new TaskUseCaseCreate(taskRepository);

  test('should be able to create a task', async () => {
    await providerCreate({
      name: 'teste',
      email: 'teste@email.com',
      password: '123456'
    });
    const idUser = await providerFindEmail({
      email: 'teste@email.com',
      password: '123456'
    });
    if (idUser instanceof Error) return;

    const task = await taskUseCaseCreate.create({
      task: 'teste',
      priority: 'normal' as IPriority,
      status: 'open' as IStatus,
      idUser: idUser.id as DeepPartial<User>
    });
    expect(task).toEqual({
      task: 'teste',
      priority: 'normal',
      status: 'open',
      idUser: idUser.id,
      id: expect.any(String),
      creationDate: new Date().toLocaleString()
    });
  });

});