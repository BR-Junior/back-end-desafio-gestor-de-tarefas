import { IUserRepository } from '../repositories/IUserRepository';
import { IUserDTO } from '../DTO/IUserDTO';
import {UserEntity} from '../entity/UserEntity';

export class UserUseCaseCreate {
  constructor(private repo: IUserRepository) {}
  async create(data:IUserDTO): Promise<IUserDTO | Error> {
    const {name,email,password} = data;
    try {
      const result = new UserEntity({
        name,
        email,
        password
      });
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await this.repo.create(result);
      return result as IUserDTO;
    }catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}