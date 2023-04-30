import { validation } from '../../../../shared/validation';
import * as yup from 'yup';

export const taskValidationUpdate = validation({
  body: yup.object().shape({
    task: yup.string().required('task é obrigatoria'),
    priority: yup.string().required('prioridade é obrigatori')
      .oneOf(['baixa', 'media', 'alta'], 'prioridade deve ser baixa, media ou alta'),
    status: yup.string().required('status é obrigatori')
      .oneOf(['aberto', 'fazendo', 'terminado'], 'status deve ser aberto, fazendo ou terminado'),
    idUser: yup.string().required('id de usuario é obrigatorio'),
  }),
});

