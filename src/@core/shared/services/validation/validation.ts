import * as yup from 'yup';



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