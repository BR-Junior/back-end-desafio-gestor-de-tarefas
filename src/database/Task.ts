import {Column, Entity, Index, PrimaryColumn} from 'typeorm';
import { ITaskDTO, IPriority } from '../components/task/DTO/ITaskDTO';


@Entity('tasks')
export  class Task implements ITaskDTO{
@PrimaryColumn()
@Index()
  id: string;
@Column()
  task: string;
@Column({
  type: 'enum',
  enum: IPriority
})
  priority: IPriority;
@Column()
  creationDate: string;
@Column()
  idUser: string;
}