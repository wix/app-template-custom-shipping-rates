'use client';

import { useAccessToken } from '@/app/client-hooks/access-token';
import { useQuery } from '@tanstack/react-query';
import { getLastOrders } from '@/app/actions/orders';
export const useOrders = () => {
  const accessTokenPromise = useAccessToken();
  return useQuery({
    queryKey: ['orders'],
    queryFn: async () => {
      return accessTokenPromise.then((accessToken) => getLastOrders(accessToken));
    },
  });
};
