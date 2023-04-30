import {TaskRepository} from '../../repositories/TaskRepository';
import { TaskUseCaseUpdate } from './TaskUseCaseUpdate';
import { TaskControlleUpdate } from './TaskControlleUpdate';

const taskRepository = new TaskRepository();
const taskUseCaseUpdate  = new TaskUseCaseUpdate(taskRepository);
const taskControllerUpdate = new TaskControlleUpdate(taskUseCaseUpdate);

export { taskControllerUpdate };