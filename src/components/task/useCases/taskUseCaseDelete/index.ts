import {TaskRepository} from '../../repositories/TaskRepository';
import { TaskUseCaseDelete } from './TaskUseCaseDelete';
import { TaskControlleDelete } from './TaskControlleDelete';

const taskRepository = new TaskRepository();
const taskUseCaseUpdate  = new TaskUseCaseDelete(taskRepository);
const taskControlleDelete = new TaskControlleDelete(taskUseCaseUpdate);

export { taskControlleDelete };