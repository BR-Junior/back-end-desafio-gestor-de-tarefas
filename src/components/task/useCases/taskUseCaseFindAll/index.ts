import {TaskRepository} from '../../repositories/TaskRepository';
import {TaskUseCaseFindAll} from './TaskUseCaseFindAll';
import {TaskControlleFindAll} from './TaskControlleFindAll';


const taskRepository = new TaskRepository();
const taskUseCaseFindAll = new TaskUseCaseFindAll(taskRepository);
const taskControllerFindAll = new TaskControlleFindAll(taskUseCaseFindAll);

export { taskControllerFindAll };