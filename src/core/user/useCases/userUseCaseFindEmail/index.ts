import {IUserUseCaseFindEmail} from './IUserUseCaseFindEmail';
import {UserUseCaseFindEmail} from './UserUseCaseFindEmail';
import {UserRepository} from '../../repository/UserRepository';


export const findEmail = async (params: IUserUseCaseFindEmail.Params) => {
  const userRepository = new UserRepository();
  const userUseCaseFindEmail = new UserUseCaseFindEmail(userRepository);

  const response = await userUseCaseFindEmail.findEmail(params);


  console.log(response);

  return response;
};