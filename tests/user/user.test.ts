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