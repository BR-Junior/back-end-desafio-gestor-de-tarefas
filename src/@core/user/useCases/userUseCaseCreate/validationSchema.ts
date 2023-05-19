import * as yup from 'yup';
import {IUserUseCaseCreate} from './IUserUseCaseCreate';


export const userSchemaCreate: yup.ObjectSchema<IUserUseCaseCreate.Params> = yup.object().shape({
  name: yup.string().required('name é obrigatório'),
  email: yup.string().required('email é obrigatório'),
  password: yup.string().required('password é obrigatório')
});