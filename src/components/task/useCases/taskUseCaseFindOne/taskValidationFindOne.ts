import { validation } from '../../../../shared/validation';
import * as yup from 'yup';

export const taskValidationFindOne = validation({
  params: yup.object().shape({
    id: yup.string().uuid('id invalido'),
  }),
});

