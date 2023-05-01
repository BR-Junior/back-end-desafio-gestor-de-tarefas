import {Column, Entity, Index,  OneToOne, PrimaryColumn} from 'typeorm';
import { IUserModelDTO} from '../components/user/DTO/IUserDTO';
import { Task } from './Task';


@Entity('users')
export class User implements IUserModelDTO{
  @PrimaryColumn()
  @Index()
    id: string;
  @Column()
    name: string;
  @Column()
    email: string;
  @Column()
    password: string;
  @OneToOne(() => Task, task => task.idUser)
    tasks: Task;
}