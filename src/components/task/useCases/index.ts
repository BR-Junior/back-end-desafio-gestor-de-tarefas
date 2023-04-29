import { taskControllerCreate as taskCreate} from './taskUseCaseCreate';
import { taskControllerFindOne as taskFindOne } from './taskUseCaseFindOne';

export const controllers = {
  taskCreate,
  taskFindOne
};