import bcrypt from 'bcrypt';
const BCRYPT_SALT_ROUNDS = 12;

export const encryptCode = async (code: string) => {
  return bcrypt.hash(code, BCRYPT_SALT_ROUNDS)
}

export const compareEncrytedCode = (fitstCode: string, secondCode: string) => {
  return bcrypt.compare(fitstCode, secondCode)
}
