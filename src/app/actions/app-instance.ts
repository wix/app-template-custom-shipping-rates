'use server';
import { headers } from 'next/headers';
import { decodeJwt } from '@/app/utils/jwt-verify';

export const getAppInstance = async (
  accessToken?: string | null,
): Promise<{ instance: Record<string, any> & { instanceId: string }; site: Record<string, any> }> =>
  fetch('https://www.wixapis.com/apps/v1/instance', {
    method: 'GET',
    headers: accessToken
      ? {
          Authorization: accessToken,
        }
      : Object.fromEntries(headers().entries()),
  }).then((res) => res.json());

export const parseAccessToken = (token: string) => {
  return decodeJwt(token.replace(/.*JWS\./, ''));
};
