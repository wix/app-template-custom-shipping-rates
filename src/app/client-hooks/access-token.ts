'use client';
import { useSDK } from '@/app/utils/wix-sdk.client-only';
import { useSearchParams } from 'next/navigation';

export const useAccessToken = () => {
  const { dashboard } = useSDK();
  const searchParams = useSearchParams();
  return searchParams.get('accessToken')
    ? Promise.resolve(searchParams.get('accessToken'))
    : dashboard.getAccessToken?.();
};
