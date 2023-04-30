import { v4 as uuid} from 'uuid';
import { IUserDTO } from '../DTO/IUserDTO';
import {ITaskDTO} from '../../task/DTO/ITaskDTO';

export class UserEntity implements IUserDTO{
  readonly id?: string |null;
  name: string;
  email: string;
  password: string;
  tasks: ITaskDTO[];

  constructor(props: Omit<UserEntity, 'id'>, id?:string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
  }
}

