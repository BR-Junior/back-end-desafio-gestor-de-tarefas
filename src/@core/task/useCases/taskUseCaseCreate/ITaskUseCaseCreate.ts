import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {string} from 'yup';

export interface ITaskUseCaseCreate {
  create(params: ITaskUseCaseCreate.Params): Promise<ITaskUseCaseCreate.Result | Error>
}
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
export namespace ITaskUseCaseCreate {
  export type Params = {
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User>
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User>
  }
}