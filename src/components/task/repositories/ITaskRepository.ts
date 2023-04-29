import { ITaskDTO } from '../DTO/ITaskDTO';


export interface ITaskRepositoryCreta {
  create(task:Omit<ITaskDTO, 'id' | 'creationDate'>):Promise<{}>
}

export interface ITaskRepositoryFindOne {
  findOne(id:string):Promise<ITaskDTO>
}
// delete(id:string):Promise<void>
// findAll(page:number, limit:number):Promise<ITaskDTO[]>

// update(id:string, task:Omit<ITaskDTO, 'id'>):Promise<void>