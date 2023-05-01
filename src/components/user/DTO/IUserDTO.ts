import { Task } from '../../../database/Task';

export interface IUserDTO {
  id: string
  name: string
  email: string
  password: string
  // tasks: DeepPartial<Task[]>
}
export interface IUserModelDTO {
  readonly id?: string | null
  name: string
  email: string
  password: string
  tasks: Task |string
}


