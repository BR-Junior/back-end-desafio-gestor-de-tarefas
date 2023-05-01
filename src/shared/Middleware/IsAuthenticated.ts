import { RequestHandler } from 'express';



export const isAuthenticated:RequestHandler = async (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {
    res.status(400).json({
      errors: { message: 'Não autenticado authorization' }
    });
  }
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const [type, token] = authorization.split(' ');
  if (type !== 'Bearer') {
    res.status(400).json({
      errors: { message: `Não autenticado Bearer ${type}` }
    });
  }
  if (token !== 'teste.teste.teste') {
    res.status(400).json({
      errors: { message: `Não autenticado token ${token}` }
    });
  }


  return next();
};