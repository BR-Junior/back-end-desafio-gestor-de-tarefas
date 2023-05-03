import { userControlleCreater as SignUp } from './useCases/userUseCaseCreate';
import { userValidationCreate as signUpValidation } from './useCases/userUseCaseCreate/userValidationCreate';
import { userControlleFindOneEmail as Signin } from './useCases/userUseCaseFindOneEmail';


export const controllerUser = {
  signUpValidation,
  SignUp,
  Signin
};