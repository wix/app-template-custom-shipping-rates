import { decodeJwt } from '@/app/utils/jwt-verify';

export const parseAccessToken = (token: string) => {
  return decodeJwt(token.replace(/.*JWS\./, ''));
};
