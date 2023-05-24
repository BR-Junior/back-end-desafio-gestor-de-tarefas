import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';

export interface ITaskUseCaseSearch {
  search(params: ITaskUseCaseSearch.Params): Promise< ITaskUseCaseSearch.Result[] | Error>
}
export namespace ITaskUseCaseSearch {
  export type Params = {
    task: string
    idUser: string
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User> | string
  }
}