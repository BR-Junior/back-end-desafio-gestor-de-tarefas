import {IUserUseCaseCreate} from './IUserUseCaseCreate';
import {UserEntity} from '../../entity/UserEntity';
import {passwordCrypto} from '../../../shared/services/passwordCrypto/passwordCrypto';


export class UserUseCaseCreate implements IUserUseCaseCreate{
  constructor(private repoUseCase: IUserUseCaseCreate) {}

  async create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result | Error> {
    const {name, email, password} = params;

    try {
      const hashedPassword  = await passwordCrypto.hashPassword(password);
      const userEntity = new UserEntity({
        name: name,
        email: email,
        password: hashedPassword
      });
      return await this.repoUseCase.create(userEntity);

    }catch (e) {
      return new Error('Internal service error');
    }
  }
}