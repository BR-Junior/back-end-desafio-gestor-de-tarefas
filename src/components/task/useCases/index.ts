import { taskControllerCreate as taskCreate} from './taskUseCaseCreate';
import { taskControllerFindOne as taskFindOne } from './taskUseCaseFindOne';
import { taskControllerUpdate as taskUpdate } from './taskUseCaseUpdate';
import { taskControlleDelete as taskDelete } from './taskUseCaseDelete';

export const controllers = {
  taskCreate,
  taskFindOne,
  taskUpdate,
  taskDelete
};