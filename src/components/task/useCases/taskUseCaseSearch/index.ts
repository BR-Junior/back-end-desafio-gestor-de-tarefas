import {TaskRepository} from '../../repositories/TaskRepository';
import {TaskUseCaseSearch} from './TaskUseCaseSearch';
import {ITaskControllerSearch} from './ITaskControllerSearch';


const taskRepository = new TaskRepository();

const taskUseCaseSearch = new TaskUseCaseSearch(taskRepository);

const taskControllerSearch = new ITaskControllerSearch(taskUseCaseSearch);

export { taskControllerSearch };