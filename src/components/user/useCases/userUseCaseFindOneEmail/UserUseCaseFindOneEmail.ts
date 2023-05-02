import { IUserRepository } from '../../repositories/IUserRepository';
import { IUserDTO } from '../../DTO/IUserDTO';
import { passwordCrypto } from '../../../../shared/services/passwordCrypto';
import { JWTService } from '../../../../shared/services/JWTService';


export class UserUseCaseFindOneEmail {
  constructor(private repo: IUserRepository) {
  }

  async findOneEmail(data:IUserDTO): Promise<{} | Error> {
    try {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const result = await this.repo.findOneEmail(data.email);
      if (result instanceof Error) {
        return new Error('Email  invalidos');
      }

      const passwordMatch = await passwordCrypto.verifyPassword(data.password, result.password);
      const accessToken = JWTService.sign({uid: result.id});

      if (!passwordMatch) {
        return new Error('Email ou senha invalidos');
      }else {
        return {token: accessToken, id: result.id};
      }

    } catch (err) {
      console.log(err);
      return Error('Erro interno de serviço');
    }
  }
}
