import {TaskEntity} from '../../entity/TaskEntity';

export interface ITaskUseCaseSearch {
  search(params: ITaskUseCaseSearch.Params): Promise<TaskEntity | TaskEntity[] | Error>
}
export namespace ITaskUseCaseSearch {
  export type Params = {
    task: string
    idUser: string
  }
}