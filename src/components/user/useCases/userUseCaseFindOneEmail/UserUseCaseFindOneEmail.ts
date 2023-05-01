import { IUserRepository } from '../../repositories/IUserRepository';
import { IUserDTO } from '../../DTO/IUserDTO';
import { passwordCrypto } from '../../../../shared/services/passwordCrypto';


export class UserUseCaseFindOneEmail {
  constructor(private repo: IUserRepository) {
  }

  async findOneEmail(email: string, password:string): Promise<IUserDTO | Error> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await this.repo.findOneEmail(email);
      if (result instanceof Error) {
        return new Error('Email  invalidos');
      }

      const passwordMatch = await passwordCrypto.verifyPassword(password, result.password);
      if (!passwordMatch) {
        return new Error('Email ou senha invalidos');
      }else {
        return result as IUserDTO;
      }

    } catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}
