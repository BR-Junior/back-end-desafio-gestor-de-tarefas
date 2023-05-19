import {UserRepository} from '../../src/@core/user/repository/UserRepository';
import {UserUseCaseFindEmail} from '../../src/@core/user/useCases/userUseCaseFindEmail/UserUseCaseFindEmail';

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