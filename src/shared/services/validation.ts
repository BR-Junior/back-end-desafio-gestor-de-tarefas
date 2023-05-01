import { ObjectSchema, ValidationError } from 'yup';
import { RequestHandler } from 'express';

type TProperty = 'body' | 'header' | 'params' | 'query';


type TAllSchemas = Record<TProperty, ObjectSchema<any>>;
type TValidations = (schemas: Partial<TAllSchemas>) => RequestHandler;

export const validation: TValidations = (schemas) => async (req, res, next) => {

  const errorsResult: Record<string, Record<string, string>> = {};

  Object.entries(schemas).forEach(([key, schema]) => {
    try {
      schema.validateSync(req[key as TProperty], { abortEarly: false });
    }catch (err) {
      const yupError = err as ValidationError;
      const errors: Record<string, string> = {};

      yupError.inner.forEach(error => {
        if (!error.path) return;
        errors[error.path] = error.message;
      });
      errorsResult[key] = errors;
    }
  });

  Object.entries(errorsResult).length === 0 ? next() : res.status(400).json({ errors: errorsResult });
};