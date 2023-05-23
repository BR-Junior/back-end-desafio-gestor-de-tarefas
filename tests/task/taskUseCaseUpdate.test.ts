import {TaskRepository} from '../../src/@core/task/repository/TaskRepository';
import {TaskUseCaseUpdate} from '../../src/@core/task/useCases/taskUseCaseUpdate/TaskUseCaseUpdate';
import {ITaskUseCaseUpdate} from '../../src/@core/task/useCases/taskUseCaseUpdate/ITaskUseCaseUpdate';
import {IPriority, IStatus} from '../../src/@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {providerCreate} from '../../src/@core/user/useCases/userUseCaseCreate';
import {providerFindEmail} from '../../src/@core/user/useCases/userUseCaseFindEmail';
import {create} from '../../src/@core/task/useCases/taskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../src/database/User';

describe('task update', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseUpdate = new TaskUseCaseUpdate(taskRepository);

  test('should be able to update a task', async () => {
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
    const params: ITaskUseCaseUpdate.Params = {
      id: task.id,
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    };
    const update = await taskUseCaseUpdate.update(task.id, params);
    expect(update).toEqual({
      creationDate: expect.any(String),
      id: task.id,
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    });
  });
});