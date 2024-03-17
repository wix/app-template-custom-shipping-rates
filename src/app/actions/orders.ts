// 'use server';
/**
 *  if your deployment provider supports it, you can uncomment the line above to use server actions
 *  This will decrease the bundle size and improve performance by moving the server code to the server.
 */
import { createSdk } from '@/app/utils/wix-sdk';

import { OrderSummary } from '@/app/types/order';

export async function getLastOrders({ accessToken }: { accessToken: string }): Promise<OrderSummary[]> {
  const sdk = createSdk(accessToken);
  return sdk.orders
    .searchOrders({
      search: {
        cursorPaging: {
          limit: 3,
        },
      },
    })
    .then((res) => {
      return (
        res.orders?.map(
          (order) =>
            ({
              id: order.number ?? '',
              createdDate: order?._createdDate ?? '',
              totalPrice: order?.priceSummary?.totalPrice?.amount ?? 0,
              currency: order?.currency ?? 'USD',
            }) as OrderSummary,
        ) ?? []
      );
    })
    .catch((e) => {
      console.error('Failed to fetch orders.ts: ', e);
      return [];
    });
}
