import { v4} from 'uuid';

export class UserEntity {
  readonly id?: string |null;
  name: string;
  email: string;
  password: string;

  constructor(props: Omit<UserEntity, 'id'>, id?:string) {
    Object.assign(this, props);

    if (!id) this.id = v4();
  }
}

