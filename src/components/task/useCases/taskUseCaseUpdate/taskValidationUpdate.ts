import { validation } from '../../../../shared/services/validation';
import * as yup from 'yup';

export const taskValidationUpdate = validation({
  body: yup.object().shape({
    task: yup.string().required('task é obrigatoria'),
    priority: yup.string().required('prioridade é obrigatori')
      .oneOf(['low', 'normal', 'high'], 'prioridade deve ser low, normal ou high'),
    status: yup.string().required('status é obrigatori')
      .oneOf(['open', 'doing', 'finished'], 'status deve ser open, doing ou finished'),
    idUser: yup.string().required('id de usuario é obrigatorio'),
  }),
});

