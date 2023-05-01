import { validation } from '../../../../shared/services/validation';
import * as yup from 'yup';


export const userValidationFindOneEmail = validation({
  body: yup.object().shape({
    name: yup.string().required('Nome é obrigatório').min(3, 'Nome deve ter no mínimo 3 caracteres'),
    email: yup.string().required('E-mail é obrigatório').email('E-mail invalido'),
    password: yup.string().required('Pessword é obrigatório').min(6,'Pessword deve ter no mínimo 6 caracteres'),
  }),
});

