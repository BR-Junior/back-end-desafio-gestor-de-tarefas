import {idConverter} from '../converter/idConverter';
import {taskConverter} from '../converter/taskConverter';

class TesteEntity {
  readonly id?: string |null;
  name: string;
  email: string;
  password: string;
  readonly cpf: string;

  constructor(props: Omit<TesteEntity, 'id'>, id?:string, ) {
    Object.assign(this, props);

    // if (!id) this.id = v4();

    id ? this.id = id : this.id = idConverter();

    taskConverter(props.cpf);

  }

}