import {IUserUseCaseCreate} from './IUserUseCaseCreate';
import {UserUseCaseCreate} from './UserUseCaseCreate';
import {UserRepository} from '../../repository/UserRepository';


export const providerCreate = async (params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result | Error> => {
  const userRepository = new UserRepository();
  const userUseCaseCreate = new UserUseCaseCreate(userRepository);

  return userUseCaseCreate.create(params);
};
