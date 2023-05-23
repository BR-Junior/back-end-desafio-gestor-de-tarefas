import { RequestHandler } from 'express';
import { JWTService } from './JWTService';



export const isAuthenticated:RequestHandler = async (req, res, next) => {

  const { authorization } = req.headers;

  if (!authorization) {
    return  res.status(400).json({
      errors: { message: 'Não autenticado authorization' }
    });
  }
  const jwtData = JWTService.verify(authorization);
  if (jwtData === 'JWT_SECRET_NOT_FOUND') {
    return res.status(400).json({
      errors: { message: 'Erro ao verificar o token' }
    });
  } else if (jwtData === 'INVALID_TOKEN') {
    return res.status(400).json({
      errors: { message: 'Não autenticado' }
    });
  }

  return next();
};