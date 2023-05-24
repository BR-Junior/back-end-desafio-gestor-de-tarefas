import * as yup from 'yup';
import {IPriority, IStatus} from './ITaskUseCaseCreate';
import {TaskEntity} from '../../entity/TaskEntity';
import {DeepPartial} from 'typeorm';
import {User} from '../../../../database/User';


// export const taskSchemaCreate: yup.ObjectSchema<Omit<TaskEntity, 'idUser' | 'id' | 'creationDate'>> = yup.object().shape({
//   task: yup.string().required('task é obrigatório'),
//   priority: yup.mixed<IPriority>().oneOf(Object.values(IPriority)).required('priority é obrigatório'),
//   status: yup.mixed<IStatus>().oneOf(Object.values(IStatus)).required('status é obrigatório'),
//   idUser: yup.string().uuid('id inválido').required('idUser é obrigatório'),
// });

export const taskSchemaCreate = yup.object().shape({
  id: yup.string().notRequired(),
  task: yup.string().required('task é obrigatório'),
  priority: yup.mixed<IPriority>().oneOf(Object.values(IPriority)).required('priority é obrigatório'),
  status: yup.mixed<IStatus>().oneOf(Object.values(IStatus)).required('status é obrigatório'),
  idUser: yup.string().uuid('id inválido').required('idUser é obrigatório'),
  creationDate: yup.string().notRequired()
});