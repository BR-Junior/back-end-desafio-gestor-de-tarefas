import {typeORMConfig} from '../../../typeORMConfig';
import {Task} from '../../../database/Task';
import {ITaskUseCaseCreate} from '../useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {ITaskUseCaseFindAll} from '../useCases/taskUseCaseFindAll/ITaskUseCaseFindAll';


export class TaskRepository implements
  ITaskUseCaseCreate,
ITaskUseCaseFindAll{
  private repoDb = typeORMConfig.getRepository(Task);

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

}