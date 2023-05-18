import { User } from '../../../database/User';
import {DeepPartial} from 'typeorm';

export enum IPriority {
  low = 'low',
  normal = 'normal',
  high = 'high'
}
export enum IStatus {
  open = 'open',
  doing = 'doing',
  finished = 'finished'
}
export interface ITaskDTO {
  readonly id: string ;
  task: string;
  priority: IPriority;
  status: IStatus,
  creationDate: string;
  idUser: DeepPartial<User> ;
}

export interface ITaskBucaDTO {
  task: string;
}


