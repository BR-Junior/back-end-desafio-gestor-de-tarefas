import {IPriority, IStatus} from '../useCases/taskUseCaseCreate/ITaskUseCaseCreate';
import {DeepPartial} from 'typeorm';
import {User} from '../../../database/User';
import {taskConverter} from '../../teste/domain/converter/taskConverter';
import {creationDateConverter} from '../../teste/domain/converter/creationDateConverter';
import {idConverter} from '../../teste/domain/converter/idConverter';
import {validation} from '../../shared/services/validation/validation';
import {taskSchemaCreate} from '../useCases/taskUseCaseCreate/validationSchema';


export class TaskEntity {
  readonly id?: string |null;
  task: string;
  priority: IPriority | string;
  status: IStatus | string;
  idUser: DeepPartial<User>;
  readonly creationDate?: string | null;

  constructor(task: string, priority: string, status: string, idUser: DeepPartial<User>, id?: string, creationDate?: string) {
    // Object.assign(this, props);
    if (task) this.task = taskConverter(task);
    this.priority = priority;
    this.status = status;
    this.idUser = idUser;
    if (!id) this.id = idConverter();
    if (!creationDate) this.creationDate = creationDateConverter();

  }
  async validation () {
    const isValid = await validation(this, taskSchemaCreate);
    if (isValid.errors) return  isValid;
    if (isValid) return; 
  }
}
