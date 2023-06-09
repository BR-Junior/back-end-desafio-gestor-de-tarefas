import {Column, Entity, Index, JoinColumn, ManyToOne, PrimaryColumn} from 'typeorm';
import { User } from './User';
import {IPriority, IStatus} from '../@core/task/useCases/taskUseCaseCreate/ITaskUseCaseCreate';


@Entity('tasks')
export  class Task {
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
@Column({
  type: 'enum',
  enum: IStatus
})
  status: IStatus;
@Column()
  creationDate: string;
@ManyToOne(() => User, user => user.id)
@JoinColumn({name: 'id_user'})
  idUser: User;
}