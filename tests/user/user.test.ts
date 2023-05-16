import {UserUseCaseCreate} from '../../src/components/user/useCases/userUseCaseCreate/UserUseCaseCreate';
import {UserRepository} from '../../src/components/user/repositories/UserRepository';
import {IUserRepository} from '../../src/components/user/repositories/IUserRepository';
import {UserEntity} from '../../src/components/user/entity/UserEntity';

const UserUseCaseCreateMock = UserUseCaseCreate as jest.Mock<UserUseCaseCreate>;
describe('create user', () => {
  let sut: UserUseCaseCreate;

  const UserRepositoryMock: IUserRepository = {
    create: jest.fn().mockReturnValue({})
  };
  beforeEach(() => {
    sut = new UserUseCaseCreateMock(UserRepositoryMock);
  });

  test('certo', async () => {

    const data = {
      name: 'pipoca',
      email: 'email@email.com',
      password: '123456'
    };

    const result =  await sut.create(data);

    expect(result).toBeTruthy();
    
  });
});