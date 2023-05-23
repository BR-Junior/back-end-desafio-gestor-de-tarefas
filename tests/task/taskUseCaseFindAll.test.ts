import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseFindAll} from '../../src/@core/task/useCases/taskUseCaseFindAll/taskUseCaseFindAll';
import {providerCreate} from '../../src/@core/user/useCases/userUseCaseCreate';
import {providerFindEmail} from '../../src/@core/user/useCases/userUseCaseFindEmail';
import {create} from '../../src/@core/task/useCases/taskUseCaseCreate';
import {IPriority, IStatus} from '../../src/@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../src/database/User';

describe('find all task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindAll = new TaskUseCaseFindAll(taskRepository);

  test('should be able to find all task', async () => {
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
    const task = await  create({
      task: 'teste find one',
      priority: 'normal' as IPriority,
      status: 'open'as IStatus,
      idUser: idUser.id as DeepPartial<User>
    });
    if (task instanceof Error) return;

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const findAll = await taskUseCaseFindAll.findAll(idUser.id);
    expect(Array.isArray(findAll)).toBe(true);
  });

});