import { validation } from '../../../../shared/validation';
import * as yup from 'yup';

export const taskValidationDelete= validation({
  params: yup.object().shape({
    id: yup.string().uuid('id invalido'),
  }),
});

