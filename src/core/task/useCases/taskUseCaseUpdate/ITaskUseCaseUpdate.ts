import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';
import {TaskEntity} from '../../entity/TaskEntity';

export interface ITaskUseCaseUpdate {
  update(id:string, params: ITaskUseCaseUpdate.Params): Promise<TaskEntity | Error>
}
export namespace ITaskUseCaseUpdate {
   export type Params = {
     id: string
    task: string
    priority: IPriority
    status: IStatus
    idUser: DeepPartial<User[]>
  }
}