import {typeORMConfig} from '../../../typeORMConfig';
import {User} from '../../../database/User';
import {IUserUseCaseCreate} from '../useCases/userUseCaseCreate/IUserUseCaseCreate';
import {IUserUseCaseFindEmail} from '../useCases/userUseCaseFindEmail/IUserUseCaseFindEmail';


export class UserRepository implements
  IUserUseCaseCreate,
  IUserUseCaseFindEmail{
  private repoDb = typeORMConfig.getRepository(User);

  async create(params: IUserUseCaseCreate.Params): Promise<IUserUseCaseCreate.Result | Error> {
    try {
      const result = await this.repoDb.create(params);
      const save =await this.repoDb.save(result);
      const {id, name, email} = save;
      return {id, name, email};

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async findEmail(params: IUserUseCaseFindEmail.Params): Promise<IUserUseCaseFindEmail.Result | Error> {
    try {
      const result = await this.repoDb.findOne({
        where: {email: params.email}
      });
      if (result) return result;
      return new Error('Invalid email or password');

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

}