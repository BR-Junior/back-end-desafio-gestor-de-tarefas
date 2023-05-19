import {UserRepository} from '../../src/@core/user/repository/UserRepository';
import {UserUseCaseCreate} from '../../src/@core/user/useCases/userUseCaseCreate/UserUseCaseCreate';

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
