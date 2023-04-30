import { ITaskDTO } from '../../task/DTO/ITaskDTO';

export interface IUserDTO {
  readonly id?: string | null
  name: string
  email: string
  password: string
  tasks: ITaskDTO
}


