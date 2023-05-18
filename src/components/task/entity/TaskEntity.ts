import { v4 as uuid} from 'uuid';
import {IPriority, IStatus} from '../DTO/ITaskDTO';
import {DeepPartial} from 'typeorm';
import {User} from '../../../database/User';

function dateFormatted(){
  const data = new Date(),
    day  = data.getDate().toString(),
    dayF = (day.length == 1) ? '0'+day : day,
    month  = (data.getMonth()+1).toString(),
    monthF = (month.length == 1) ? '0'+month : month,
    yearF = data.getFullYear();
  return dayF+'/'+monthF+'/'+yearF;
}
export class TaskEntity {
  readonly id?: string |null;
  task: string;
  priority: IPriority;
  status: IStatus;
  idUser: DeepPartial<User>;
  readonly creationDate?: string | null;

  constructor(props: Omit<TaskEntity, 'id' | 'creationDate'>, id?:string, creationDate?:string) {
    Object.assign(this, props);
    if (!id) {
      this.id = uuid();
    }
    if (!creationDate) {
      this.creationDate = dateFormatted();
    }
  }
}

