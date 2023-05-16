import { v4} from 'uuid';
import {ITaskDTO} from '../../task/DTO/ITaskDTO';

export class UserEntity {
  readonly id?: string |null;
  name: string;
  email: string;
  password: string;
  // tasks?: ITaskDTO[];

  constructor(props: Omit<UserEntity, 'id'>, id?:string) {
    Object.assign(this, props);
    if (!id) {
      this.id = v4();
    }
  }
}

