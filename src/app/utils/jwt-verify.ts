import jwt, { Jwt, JwtPayload } from 'jsonwebtoken';

// Decode the JWT token without secret key verification.
export const decodeJwt = <T = any>(token: string): T | null => {
  const result = jwt.decode(token, { complete: true }) as Jwt;
  const payload = result.payload as JwtPayload;
  if (payload.exp! < Math.floor(Date.now() / 1000) && payload.iat! > Math.floor(Date.now() / 1000)) {
    throw new Error('decodeJwt: The token is expired.');
  }
  return JSON.parse(payload.data);
};
