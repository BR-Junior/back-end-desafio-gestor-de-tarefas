import { ITaskDTO } from '../DTO/ITaskDTO';



export interface ITaskRepository {
  create(task:Omit<ITaskDTO, 'id' | 'creationDate'>):Promise<ITaskDTO | Error>
  findOne?(id:string):Promise<ITaskDTO | Error>
  findAll?(page:number, limit:number):Promise<ITaskDTO[]>
  update?(id:string, task:Omit<ITaskDTO, 'id'>):Promise<ITaskDTO | Error>
  delete?(id:string):Promise<void>
}