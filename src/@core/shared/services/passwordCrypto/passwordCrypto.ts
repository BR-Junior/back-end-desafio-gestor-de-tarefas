import {hashSync, compareSync, genSaltSync} from 'bcryptjs';
import 'dotenv/config';

const saltRandoms = Number(process.env.SALT_RANDOMS);
const hashPassword = async (password: string) => {

  const saltGenerated = genSaltSync(saltRandoms);

  return hashSync(password, saltGenerated);
};
const verifyPassword = async (password: string, hashedPassword: string) => {
  return compareSync(password, hashedPassword);
};

export const passwordCrypto = {
  hashPassword,
  verifyPassword
};
