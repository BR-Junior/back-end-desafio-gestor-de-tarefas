import {UserUseCaseCreate} from '../../src/core/user/useCases/userUseCaseCreate/UserUseCaseCreate';
import {UserRepository} from '../../src/core/user/repository/UserRepository';
import {UserUseCaseFindEmail} from '../../src/core/user/useCases/userUseCaseFindEmail/UserUseCaseFindEmail';
import {TaskRepository} from '../../src/core/task/repository/TaskRepository';
import {TaskUseCaseCreate} from '../../src/core/task/useCases/taskUseCaseCreate/TaskUseCaseCreate';
import {
  IPriority,
  IStatus,
} from '../../src/core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {User} from '../../src/database/User';
import {DeepPartial} from 'typeorm';
import {TaskUseCaseFindAll} from '../../src/core/task/useCases/taskUseCaseFindAll/taskUseCaseFindAll';
import {ITaskUseCaseFindAll} from '../../src/core/task/useCases/taskUseCaseFindAll/ITaskUseCaseFindAll';
import {TaskUseCaseFindOne} from '../../src/core/task/useCases/taskUseCaseFindOne/TaskUseCaseFindOne';
import {ITaskUseCaseFindOne} from '../../src/core/task/useCases/taskUseCaseFindOne/ITaskUseCaseFindOne';
import {TaskUseCaseUpdate} from '../../src/core/task/useCases/taskUseCaseUpdate/TaskUseCaseUpdate';
import {ITaskUseCaseUpdate} from '../../src/core/task/useCases/taskUseCaseUpdate/ITaskUseCaseUpdate';
import {TaskUseCaseDelete} from '../../src/core/task/useCases/taskUseCaseDelete/TaskUseCaseDelete';
import {ITaskUseCaseDelete} from '../../src/core/task/useCases/taskUseCaseDelete/ITaskUseCaseDelete';
import {TaskUseCaseSearch} from '../../src/core/task/useCases/taskUseCaseSearch/TaskUseCaseSearch';
import {ITaskUseCaseSearch} from '../../src/core/task/useCases/taskUseCaseSearch/ITaskUseCaseSearch';


describe('Cread user', () => {
  const userRepository = new UserRepository();
  const userUseCaseCreate = new UserUseCaseCreate(userRepository);

  test('should be able to create a user', async () => {
    const user = await userUseCaseCreate.create({
      name: 'teste',
      email: 'teste@email.com',
      password: '123456'
    });
    expect(user).toEqual({
      name: 'teste',
      email: 'teste@email.com',
      id: expect.any(String)
    });

  });
});


describe('Login', () => {
  const userRepository = new UserRepository();
  const userUseCaseFindEmail = new UserUseCaseFindEmail(userRepository);

  test('should return error with invalid email', async () => {
    const user = await userUseCaseFindEmail.findEmail({
      email: '',
      password: '123456'
    });
    expect(user).toEqual(new Error('Invalid email or password'));

  });

  test('should return error with invalid email', async () => {
    const user = await userUseCaseFindEmail.findEmail({
      email: 'teste@email.com',
      password: ''
    });
    expect(user).toEqual(new Error('Invalid email or password'));

  });

  test('should be able to login', async () => {
    const user = await userUseCaseFindEmail.findEmail({
      email: 'teste@email.com',
      password: '123456'
    });
    expect(user).toHaveProperty('id');
    expect(user).toHaveProperty('token');
    expect(user).toEqual({
      token: expect.any(String),
      id: expect.any(String)
    });

  });
});

describe('Create task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseCreate = new TaskUseCaseCreate(taskRepository);

  test('should be able to create a task', async () => {
    const task = await taskUseCaseCreate.create({
      task: 'Felicia',
      priority: 'normal' as IPriority,
      status: 'open' as IStatus,
      idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c' as DeepPartial<User>
    });
    expect(task).toEqual({
      task: 'Felicia',
      priority: 'normal',
      status: 'open',
      idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c',
      id: expect.any(String),
      creationDate: new Date().toLocaleString()
    });
  });

});


describe('find all task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindAll = new TaskUseCaseFindAll(taskRepository);

  test('should be able to create a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseFindAll.Params = {idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c'};
    const task = await taskUseCaseFindAll.findAll(params);
    expect(Array.isArray(task)).toBe(true);
  });

});


describe('find one task', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseFindOne = new TaskUseCaseFindOne(taskRepository);

  test('should be able to create a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseFindOne.Params = {idUser: 'e4ef7ef8-f9c7-40b7-880a-eba1d3071f4c'};
    const task = await taskUseCaseFindOne.findOne(params);
    expect(task).toEqual({
      creationDate: '30/04/2023',
      id: 'b9212fb2-2620-4086-ba88-d9050e25bb89',
      priority: 'high',
      status: 'open',
      task: 'task é obrigatoria'
    });
  });
});


describe('task update', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseUpdate = new TaskUseCaseUpdate(taskRepository);

  test('should be able to create a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseUpdate.Params = {
      id: 'b9212fb2-2620-4086-ba88-d9050e25bb89',
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    };
    const id = 'b9212fb2-2620-4086-ba88-d9050e25bb89';
    const task = await taskUseCaseUpdate.update(id, params);
    expect(task).toEqual({
      creationDate: '30/04/2023',
      id: 'b9212fb2-2620-4086-ba88-d9050e25bb89',
      priority: 'low' as IPriority,
      status: 'finished'as IStatus ,
      task: 'task é obrigatoria'
    });
  });
});

describe('task delete', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseDelete = new TaskUseCaseDelete(taskRepository);

  test('should be able to create a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const id: ITaskUseCaseDelete.Params = 'b9212fb2-2620-4086-ba88-d9050e25bb89';
    const task = await taskUseCaseDelete.delete(id);
    expect(task).not.toBeInstanceOf(Error);
  });
});


describe('task Search', () => {
  const taskRepository = new TaskRepository();
  const taskUseCaseSearch = new TaskUseCaseSearch(taskRepository);

  test('should be able to create a task', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const params: ITaskUseCaseSearch.Params = {task: 'task'};
    const task = await taskUseCaseSearch.search(params);
    expect(task).not.toBeInstanceOf(Error);
  });
});



// const UserUseCaseCreateMock = UserUseCaseCreate as jest.Mock<UserUseCaseCreate>;
// describe('create user', () => {
//   let sut: UserUseCaseCreate;
//
//   const UserRepositoryMock: IUserUseCaseCreate = {
//     create: jest.fn().mockReturnValue({})
//   };
//   beforeEach(() => {
//     sut = new UserUseCaseCreateMock(UserRepositoryMock);
//   });
//
//   test('cadastro certo', async () => {
//
//     const data = {
//       name: 'pipoca',
//       email: 'email@email.com',
//       password: '123456'
//     };
//
//     const result =  await sut.create(data);
//
//     expect(result).toBe([]);
//
//   });
//
//   test('login certo', async () => {
//
//     const data = {
//       name: 'pipoca',
//       email: 'email@email.com',
//       password: '123456'
//     };
//
//     const result =  await sut.create(data);
//
//     expect(result).toHaveProperty('id');
//     expect(result).toHaveProperty('name');
//     expect(result).toHaveProperty('password');
//
//   });
//
//
// });