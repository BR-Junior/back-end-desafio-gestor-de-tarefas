import { UserRepository } from '../../repositories/UserRepository';
import { UserUseCaseCreate } from './UserUseCaseCreate';
import { UserControlleCreater } from './UserControlleCreater';

const userRepository = new UserRepository;
const userUseCaseCreate = new UserUseCaseCreate(userRepository);
const userControlleCreater = new UserControlleCreater(userUseCaseCreate);

export { userControlleCreater };