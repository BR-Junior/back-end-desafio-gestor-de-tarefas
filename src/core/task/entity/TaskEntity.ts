import {v4 as uuid} from 'uuid';
import {IPriority, IStatus} from '../useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../../database/User';


export class TaskEntity {
  readonly id?: string |null;
  task: string;
  priority: IPriority;
  status: IStatus;
  idUser: DeepPartial<User[]>;
  readonly creationDate?: string | null;

  constructor(props: Omit<TaskEntity, 'id' | 'creationDate'>, id?:string, creationDate?:string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
    if (!creationDate) {
      this.creationDate = new Date().toLocaleString();
    }
  }
}
