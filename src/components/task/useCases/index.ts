import { taskControllerCreate as taskCreate} from './taskUseCaseCreate';
import { taskControllerFindOne as taskFindOne } from './taskUseCaseFindOne';
import { taskControllerUpdate as taskUpdate } from './taskUseCaseUpdate';
import { taskControlleDelete as taskDelete } from './taskUseCaseDelete';
import { taskControllerFindAll as taskFindAll } from './taskUseCaseFindAll';
export const controllers = {
  taskCreate,
  taskFindOne,
  taskUpdate,
  taskDelete,
  taskFindAll
};