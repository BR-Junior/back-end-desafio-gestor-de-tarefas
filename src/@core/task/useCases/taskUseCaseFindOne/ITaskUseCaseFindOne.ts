import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';

export interface ITaskUseCaseFindOne {
  findOne(params: ITaskUseCaseFindOne.Params): Promise<ITaskUseCaseFindOne.Result | Error>
}
export namespace ITaskUseCaseFindOne {
  export type Params = {
    id: string
  }
  export type Result = {
    id: string
    task: string
    priority: IPriority
    status: IStatus
    idUser: DeepPartial<User>
  }
}