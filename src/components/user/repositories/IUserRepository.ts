import { IUserDTO } from '../DTO/IUserDTO';

export interface IUserRepository {
  create?(task:Omit<IUserDTO, 'id'>):Promise<IUserDTO | Error>
  findOneEmail?(email:string):Promise<IUserDTO | Error>
}