import { OrderSummary } from '@/app/types/order';
import { ShippingAppData, ShippingMethodType, ShippingUnitOfMeasure } from '@/app/types/app-data.model';

export const getTestOrders = (): OrderSummary[] => [
  {
    id: 'test-id-1',
    createdDate: '2021-01-01T00:00:00Z',
    totalPrice: 100,
    currency: 'USD',
  },
  {
    id: 'test-id-2',
    createdDate: '2021-01-02T00:00:00Z',
    totalPrice: 200,
    currency: 'USD',
  },
];

export const getTestingShippingAppData = (): ShippingAppData => ({
  shippingMethods: [
    {
      code: 'test-shipping-rate-standard',
      title: 'Testing Standard Delivery',
      type: ShippingMethodType.STANDARD,
      unitOfMeasure: ShippingUnitOfMeasure.NUM_OF_ITEMS,
      logistics: {
        deliveryTime: '3-7 days',
      },
      costs: {
        first: 5,
        second: 2,
        thirdAndUp: 1,
      },
    },
    {
      code: 'test-shipping-rate-express',
      title: 'Testing Express Delivery',
      type: ShippingMethodType.EXPRESS,
      unitOfMeasure: ShippingUnitOfMeasure.NUM_OF_ITEMS,
      logistics: {
        deliveryTime: '1-2 days',
      },
      costs: {
        first: 10,
        second: 4,
        thirdAndUp: 2,
      },
    },
  ],
});
