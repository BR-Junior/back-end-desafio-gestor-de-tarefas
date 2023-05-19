import * as yup from 'yup';
import {IPriority, IStatus} from '../taskUseCaseCreate/ITaskUseCaseCreate';
import {ITaskUseCaseUpdate} from './ITaskUseCaseUpdate';


export const taskSchemaUpdate: yup.ObjectSchema<Omit<ITaskUseCaseUpdate.Params, 'idUser'>> = yup.object().shape({
  id: yup.string().uuid().required('id é obrigatório'),
  task: yup.string().required('task é obrigatório'),
  priority: yup.mixed<IPriority>().oneOf(Object.values(IPriority)).required('priority é obrigatório'),
  status: yup.mixed<IStatus>().oneOf(Object.values(IStatus)).required('status é obrigatório'),
  idUser: yup.string().uuid('id inválido').required('idUser é obrigatório'),
});