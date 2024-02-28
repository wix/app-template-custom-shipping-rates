import { Box, Card, Divider, Text, TextButton, SkeletonLine } from '@wix/design-system';
import { ArrowRight } from '@wix/wix-ui-icons-common';
import { useSDK } from '@/app/utils/wix-sdk.client';
import { WixPageId } from '@/app/utils/navigation.const';
import { useOrders } from '@/app/client-hooks/orders';
import React from 'react';

const LOCALE = 'en-US';

export function ShippingMethodSummary() {
  const {
    dashboard: { navigate },
  } = useSDK();
  const { data: orders, isLoading } = useOrders();

  return (
    <Card>
      <Card.Header title='Recent orders' />
      <Card.Divider />
      <Card.Content>
        <Box direction='vertical' paddingBottom='SP3'>
          {isLoading || orders?.length ? (
            (isLoading ? [null, null, null] : orders!).map((order, index) => (
              <React.Fragment key={index}>
                {index > 0 && <Divider skin='light' />}
                <Box key={index} verticalAlign='middle' align='space-between' paddingTop='SP2' paddingBottom='SP1'>
                  <Box direction='vertical'>
                    {isLoading ? (
                      <>
                        <SkeletonLine marginBottom='5px' />
                        <SkeletonLine marginBottom='5px' />
                      </>
                    ) : (
                      <>
                        <Text size='small' weight='normal'>
                          Order #{order!.id}
                        </Text>
                        <Text size='tiny' weight='thin' skin='disabled'>
                          {new Date(order!.createdDate).toLocaleDateString(LOCALE, {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit',
                          })}
                        </Text>
                      </>
                    )}
                  </Box>
                  <Text size='tiny' weight='thin'>
                    {isLoading ? (
                      <SkeletonLine />
                    ) : (
                      new Intl.NumberFormat(LOCALE, {
                        style: 'currency',
                        currency: order!.currency,
                        minimumFractionDigits: 0,
                      }).format(order!.totalPrice)
                    )}
                  </Text>
                </Box>
              </React.Fragment>
            ))
          ) : (
            <Text size='small' weight='thin'>
              No orders found.
            </Text>
          )}
        </Box>
        <Box align='right' paddingTop='SP1'>
          <TextButton onClick={() => navigate(WixPageId.MANAGE_ORDERS)} size='small' suffixIcon={<ArrowRight />}>
            See all orders
          </TextButton>
        </Box>
      </Card.Content>
    </Card>
  );
}
