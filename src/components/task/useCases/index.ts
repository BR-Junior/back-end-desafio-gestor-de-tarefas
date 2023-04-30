import { taskControllerCreate as taskCreate} from './taskUseCaseCreate';
import { taskControllerFindOne as taskFindOne } from './taskUseCaseFindOne';
import { taskControllerUpdate as taskUpdate } from './taskUseCaseUpdate';

export const controllers = {
  taskCreate,
  taskFindOne,
  taskUpdate
};