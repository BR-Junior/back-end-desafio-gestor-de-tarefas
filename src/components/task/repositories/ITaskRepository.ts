import {ITaskBucaDTO, ITaskDTO} from '../DTO/ITaskDTO';



export interface ITaskRepository {
  create(task:Omit<ITaskDTO, 'id' | 'creationDate'>):Promise<ITaskDTO | Error>
  findOne?(id:string):Promise<ITaskDTO | Error>
  findAll?(idUser:string, task:string, status:string, priority:string, creationDate:string, sort: any):Promise<ITaskDTO[] | Error>
  update?(id:string, task:Omit<ITaskDTO, 'id'>):Promise<ITaskDTO | Error>
  delete?(id:string):Promise<void>
  search?(task:string):Promise<ITaskDTO[] | Error>
}