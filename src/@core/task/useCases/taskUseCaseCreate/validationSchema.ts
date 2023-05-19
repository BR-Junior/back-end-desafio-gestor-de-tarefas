import * as yup from 'yup';
import {IPriority, IStatus, ITaskUseCaseCreate} from './ITaskUseCaseCreate';


export const taskSchemaCreate: yup.ObjectSchema<Omit<ITaskUseCaseCreate.Params, 'idUser'>> = yup.object().shape({
  task: yup.string().required('task é obrigatório'),
  priority: yup.mixed<IPriority>().oneOf(Object.values(IPriority)).required('priority é obrigatório'),
  status: yup.mixed<IStatus>().oneOf(Object.values(IStatus)).required('status é obrigatório'),
  idUser: yup.string().uuid('id inválido').required('idUser é obrigatório'),
});