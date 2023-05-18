import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';

export interface ITaskUseCaseFindAll {
  findAll(params: ITaskUseCaseFindAll.Params): Promise<ITaskUseCaseFindAll.Result[] | Error>
}
export namespace ITaskUseCaseFindAll {
  export type Params = {
    idUser: DeepPartial<User>
    creationDate: -1
    priority: any
    status: any
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority
    status: IStatus
    idUser: DeepPartial<User>
  }
}