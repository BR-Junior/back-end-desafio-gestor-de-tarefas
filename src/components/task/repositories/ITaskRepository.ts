import { ITaskDTO } from '../DTO/ITaskDTO';
export interface ITaskRepositoryCreta {
  create(task:Omit<ITaskDTO, 'id' | 'creationDate'>):Promise<string>
}

// delete(id:string):Promise<void>
// findAll(page:number, limit:number):Promise<ITaskDTO[]>
// findOne(id:string):Promise<ITaskDTO>
// update(id:string, task:Omit<ITaskDTO, 'id'>):Promise<void>