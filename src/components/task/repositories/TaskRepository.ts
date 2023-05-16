import {ITaskRepository} from './ITaskRepository';
import {IPriority, IStatus, ITaskBucaDTO, ITaskDTO} from '../DTO/ITaskDTO';
import { typeORMConfig } from '../../../typeORMConfig';
import { Task } from '../../../database/Task';
import {FindOptionsOrder} from 'typeorm';



export class TaskRepository implements ITaskRepository{
  private repository = typeORMConfig.getRepository(Task);
  async create(task:ITaskDTO): Promise<ITaskDTO> {
    const result = await this.repository.create(task);
    await this.repository.save(result);
    return result;
  }

  async findOne(id:string):Promise<ITaskDTO | Error> {
    // const result = await this.repository.findOneBy({id:id});
    const result = await this.repository.findOne({
      relations: {idUser:true},
      where: {
        id:id
      }
    });
    if (!result) return Error('message: task não encontrado');
    return result as ITaskDTO;
  }

  async update(id:string, task:Omit<ITaskDTO, 'id'>):Promise<ITaskDTO | Error> {
    await this.repository.update(id, task);
    const find = await this.repository.findOneBy({id:id});
    return find as ITaskDTO ;
  }
  async delete(id:string) {
    await this.repository.delete(id);
  }
  async findAll(idUser:string, task:string, priority:IPriority, status:IStatus, creationDate:string, sort: any):Promise<ITaskDTO[] | Error> {

    const result = await this.repository.find({
      relations: { idUser:true },
      where: {
        idUser: {
          id:idUser
        },
        task: task,
        creationDate:creationDate,
        status:status,
        priority: priority
      },
      order: sort ,
      skip: (Number('1') - 1) * 3,
      take: 10
    });
    return result;
  }

  async search(task:string) {
    console.log(task);
    task = 'teste';
    const reposnse = await this.repository.createQueryBuilder('task')
      .where('task.task LIKE :task', { task: `%${task.valueOf()}%` }).getMany();



    console.log('repository');
    console.log(reposnse);

    return reposnse;
  }
  // async teste()  {
  //   this.repository.createQueryBuilder('task').having('task.task = :task', { task: 'Timber' });
  // }
}


