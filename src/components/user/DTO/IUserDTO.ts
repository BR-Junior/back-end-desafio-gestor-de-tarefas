import { Task } from '../../../database/Task';
import { DeepPartial } from 'typeorm';

export interface IUserDTO {
  id: string
  name: string
  email: string
  password: string
  tasks: DeepPartial<Task>
}


