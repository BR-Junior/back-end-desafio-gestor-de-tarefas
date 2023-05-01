import { UserRepository } from '../../repositories/UserRepository';
import { UserUseCaseFindOneEmail } from './UserUseCaseFindOneEmail';
import { UserControlleFindOneEmail } from './UserControlleFindOneEmail';

const userRepository = new UserRepository;
const userUseCaseFindOneEmail = new UserUseCaseFindOneEmail(userRepository);
const userControlleFindOneEmail = new UserControlleFindOneEmail(userUseCaseFindOneEmail);

export { userControlleFindOneEmail };