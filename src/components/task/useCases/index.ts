import { taskControllerCreate as taskCreate} from './taskUseCaseCreate';
import { taskControllerFindOne as taskFindOne } from './taskUseCaseFindOne';
import { taskControllerUpdate as taskUpdate } from './taskUseCaseUpdate';
import { taskControlleDelete as taskDelete } from './taskUseCaseDelete';
import { taskControllerFindAll as taskFindAll } from './taskUseCaseFindAll';
import { taskValidationCreate } from './taskUseCaseCreate/taskValidationCreate';
import { taskValidationDelete } from './taskUseCaseDelete/taskValidationDelete';
import { taskValidationFindOne } from './taskUseCaseFindOne/taskValidationFindOne';
import { taskValidationUpdate } from './taskUseCaseUpdate/taskValidationUpdate';

export const controllers = {
  taskValidationCreate,
  taskCreate,
  taskValidationFindOne,
  taskFindOne,
  taskValidationUpdate,
  taskUpdate,
  taskValidationDelete,
  taskDelete,
  taskFindAll
};