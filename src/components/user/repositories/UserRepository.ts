import {IUserRepository} from './IUserRepository';
import { IUserDTO } from '../DTO/IUserDTO';
import { typeORMConfig } from '../../../typeORMConfig';
import { User } from '../../../database/User';



export class UserRepository implements IUserRepository{
  private repository = typeORMConfig.getRepository(User);
  async create(data:IUserDTO): Promise<IUserDTO> {
    // const { name,email,password } = data;
    const result = await this.repository.create(data);
    await this.repository.save(result);
    return result;
  }
  async findOneEmail(email:string): Promise<IUserDTO | Error> {
    try {
      const result = await this.repository.findOne({
        where: {
          email:email
        }
      });
      if (result) return  result;

      return new Error('Registro não encontrado');

    }catch (err) {
      console.log(err);
      return new Error('Erro ao consultar o registro');
    }
  }
}


