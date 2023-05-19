import {dataSource} from '../../../dataSource';
import {Task} from '../../../database/Task';
import {ITaskUseCaseCreate} from '../useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {ITaskUseCaseFindAll} from '../useCases/taskUseCaseFindAll/ITaskUseCaseFindAll';
import {ITaskUseCaseDelete} from '../useCases/taskUseCaseDelete/ITaskUseCaseDelete';
import {ITaskUseCaseFindOne} from '../useCases/taskUseCaseFindOne/ITaskUseCaseFindOne';
import {ITaskUseCaseUpdate} from '../useCases/taskUseCaseUpdate/ITaskUseCaseUpdate';
import {TaskEntity} from '../entity/TaskEntity';
import {ITaskUseCaseSearch} from '../useCases/taskUseCaseSearch/ITaskUseCaseSearch';


export class TaskRepository implements
  ITaskUseCaseCreate,
  ITaskUseCaseFindAll,
  ITaskUseCaseFindOne,
  ITaskUseCaseUpdate,
  ITaskUseCaseDelete,
  ITaskUseCaseSearch{
  private repoDb = dataSource.getRepository(Task);

  async create(params: ITaskUseCaseCreate.Params): Promise<ITaskUseCaseCreate.Result | Error> {
    try {
      const result = await this.repoDb.create(params);
      return await this.repoDb.save(result);

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async findAll(params: ITaskUseCaseFindAll.Params): Promise<ITaskUseCaseFindAll.Result[] | Error> {
    try {
      return await this.repoDb.find({
        // relations: {idUser: true},
        where: {
          idUser: {
            id: String(params.idUser)
          }
        },
        order: {creationDate: params.creationDate, priority: params.priority, status: params.status},
        // skip: (Number('1') - 1) * 3,
        // take: 10
      });

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async findOne(params: ITaskUseCaseFindOne.Params): Promise<ITaskUseCaseFindOne.Result | Error> {
    try {
      const result = await this.repoDb.findOne({
        where: {id: params.id}
      });
      if (!result) return new Error('task not found');
      return result;

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async update(id:string, params: ITaskUseCaseUpdate.Params): Promise<TaskEntity | Error> {
    try {
      await this.repoDb.update(id, params);
      const result = await this.repoDb.findOne({
        where: {id: params.id}
      });
      if (!result) return new Error('task not found');
      return result;
    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async delete(params: ITaskUseCaseDelete.Params): Promise<void | Error> {
    try {
      await this.repoDb.delete(params);

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

  async search(params: ITaskUseCaseSearch.Params): Promise<TaskEntity | TaskEntity[] | Error> {
    try {
      return  await this.repoDb.createQueryBuilder('task')
        .where('task.task LIKE :task', { task: `%${params.task}%` }).getMany();

    }catch (e) {
      return new Error('Error querying the registry');
    }
  }

}