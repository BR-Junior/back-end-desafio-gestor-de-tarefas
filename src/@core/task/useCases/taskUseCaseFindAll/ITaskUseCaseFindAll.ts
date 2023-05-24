import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';
import {string} from 'yup';

export interface ITaskUseCaseFindAll {
  findAll(params: ITaskUseCaseFindAll.Params): Promise<ITaskUseCaseFindAll.Result[] | Error>
}
export namespace ITaskUseCaseFindAll {
  export type Params = {
    idUser: DeepPartial<User>
    creationDate: any
    priority: any
    status: any
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority | string
    status: IStatus | string
    idUser: DeepPartial<User> | string
  }
}