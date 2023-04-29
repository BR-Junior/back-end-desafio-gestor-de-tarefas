import {TaskRepository} from '../../repositories/TaskRepository';
import {TaskUseCaseFindOne} from './TaskUseCaseFindOne';
import {TaskControlleFindOne} from './TaskControlleFindOne';


const taskRepository = new TaskRepository();
const taskUseCaseFindOne = new TaskUseCaseFindOne(taskRepository);
const taskControllerFindOne = new TaskControlleFindOne(taskUseCaseFindOne);

export { taskControllerFindOne };