import { IUserRepository } from '../../repositories/IUserRepository';
import { IUserDTO } from '../../DTO/IUserDTO';
import { UserEntity } from '../../entity/UserEntity';
import { passwordCrypto } from '../../../../shared/services/passwordCrypto';

export class UserUseCaseCreate {
  constructor(private repo: IUserRepository) {}
  async create(data: { password: string; name: string; email: string }): Promise<IUserDTO | Error> {
    const { name, email, password} = data;
    try {
      const hashedPassword = await passwordCrypto.hashPassword(password);
      const result = new UserEntity({
        name,
        email,
        password: hashedPassword
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