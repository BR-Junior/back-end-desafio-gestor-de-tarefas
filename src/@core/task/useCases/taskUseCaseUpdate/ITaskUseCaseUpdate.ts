import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';
import {TaskEntity} from '../../entity/TaskEntity';
import {string} from 'yup';

export interface ITaskUseCaseUpdate {
  update(id:string, params: ITaskUseCaseUpdate.Params): Promise<ITaskUseCaseUpdate.Result | Error>
}
export namespace ITaskUseCaseUpdate {
   export type Params = {
     id: string
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User> | string
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User> | string
  }
}