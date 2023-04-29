import { TaskRepository } from '../../repositories/TaskRepository';
import { TaskUseCaseCreate } from './TaskUseCaseCreate';
import { TaskControlleCreater } from './TaskControlleCreater';



const taskRepository = new TaskRepository();
const taskcreateUseCase = new TaskUseCaseCreate(taskRepository);
const taskControllerCreate = new TaskControlleCreater(taskcreateUseCase);

export { taskControllerCreate };
