import {ITaskRepository} from '../../repositories/ITaskRepository';
import {ITaskBucaDTO} from '../../DTO/ITaskDTO';


export class TaskUseCaseSearch {
  constructor(private taskRepo: ITaskRepository) {}

  async search(task: string) {

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const result = await this.taskRepo.search(task);
    console.log('use case');
    return result;
  }

}