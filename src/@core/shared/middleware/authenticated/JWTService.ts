import * as jwt from 'jsonwebtoken';
import 'dotenv/config';

export interface IJwdData {
  uid: string
}
const sign = (data: IJwdData) => {
  if (!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUNF';

  return jwt.sign(data, process.env.JWT_SECRET, { expiresIn: '24H' });
};
const verify = (token: string): IJwdData | 'JWT_SECRET_NOT_FOUNF' | 'INVALID_TOKEN' => {
  if (!process.env.JWT_SECRET) return 'JWT_SECRET_NOT_FOUNF';

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (typeof decoded === 'string') {
      return 'INVALID_TOKEN';
    }
    return decoded as IJwdData;

  }catch (error) {
    return 'INVALID_TOKEN';
  }
};

export const JWTService =  {
  sign,
  verify
};