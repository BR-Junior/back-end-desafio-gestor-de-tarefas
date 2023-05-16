import * as yup from 'yup';
import {IUserUseCaseCreate} from './IUserUseCaseCreate';


export const validation =  (data:any, schema:any ) => {
  return  schema.validate(data, {abortEarly: false}).
    catch((err: yup.ValidationError) => {
      const errors: { [key: string]: string } = {};
      err.inner.forEach(error => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        errors[error.path] = error.message;
      });
      return {errors};
    });
};

export const userSchemaCreate: yup.ObjectSchema<IUserUseCaseCreate.Params> = yup.object().shape({
  name: yup.string().required('name é obrigatório'),
  email: yup.string().required('email é obrigatório'),
  password: yup.string().required('password é obrigatório')
});