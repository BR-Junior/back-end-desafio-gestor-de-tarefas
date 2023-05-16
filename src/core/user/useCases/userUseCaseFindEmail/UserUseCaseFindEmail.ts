import {IUserUseCaseFindEmail} from './IUserUseCaseFindEmail';
import {passwordCrypto} from '../../../../shared/services/passwordCrypto';
import {JWTService} from '../../../../shared/services/JWTService';


export class UserUseCaseFindEmail implements IUserUseCaseFindEmail{
  constructor(private repoUsecase: IUserUseCaseFindEmail) {}
  async findEmail(params: IUserUseCaseFindEmail.Params): Promise< IUserUseCaseFindEmail.Result | Error> {
    const response = await this.repoUsecase.findEmail(params);
    if (response instanceof Error) return new Error('Invalid email or password');

    const passwordMatch = await passwordCrypto.verifyPassword(params.password, response.password);
    if (!passwordMatch) return  new Error('Invalid email or password');

    return response;

    // const accessToken = await JWTService.sign({uid: response.id});
    // if (!passwordMatch) {
    //   return new Error('Invalid email or password');
    // }else {
    //   const result = {token: accessToken, id: response.id};
    //   return result;
    // }
    // // return await this.repoUsecase.findEmail(params);
  }
}