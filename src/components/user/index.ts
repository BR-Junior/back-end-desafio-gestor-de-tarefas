import { userControlleCreater as SignUp } from './useCases/userUseCaseCreate';
import { userControlleFindOneEmail as Signin } from './useCases/userUseCaseFindOneEmail';


export const controllerUser = {
  SignUp,
  Signin
};