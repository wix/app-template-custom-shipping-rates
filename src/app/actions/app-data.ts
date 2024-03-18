// 'use server';
/**
 *  if your deployment provider supports it, you can uncomment the line above to use server actions
 *  This will decrease the bundle size and improve performance by moving the server code to the server.
 */
import { ShippingAppData, ShippingMethodType, ShippingUnitOfMeasure } from '@/app/types/app-data.model';
import { parseAccessToken } from '@/app/actions/app-instance';
import { isTestingToken } from '@/app/utils/access-token';

type AppIdentifier = { instanceId?: string; accessToken?: string };

const defaultAppData: ShippingAppData = {
  shippingMethods: [
    {
      code: 'example-shipping-rate-standard',
      title: 'Standard Delivery',
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
      code: 'example-shipping-rate-express',
      title: 'Express Delivery',
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
};

const getDatabaseKey = async (appIdentifier: AppIdentifier) => {
  let instanceId = appIdentifier.instanceId;
  if (!instanceId) {
    if (!appIdentifier.accessToken) {
      throw new Error('app-data:appIdentifier - instanceId or accessToken is required');
    }
    const appInstance = await parseAccessToken(appIdentifier.accessToken!);
    instanceId = appInstance.instance?.instanceId;
  }
  return `shipping-app-data:${instanceId}`;
};

// This is a shell function. Implement your own logic in this function to fetch data from an external database of your choice.
export async function getShippingAppData(appIdentifier: AppIdentifier): Promise<ShippingAppData> {
  try {
    if (isTestingToken(appIdentifier?.accessToken)) {
      return (await import('@/app/utils/mocks-server')).getTestingShippingAppData();
    }
    const databaseKey = await getDatabaseKey(appIdentifier);
    console.log('getShippingAppData::key - ', databaseKey);
    return defaultAppData;
  } catch (e) {
    console.log('getShippingAppData::error - ', e);
    return defaultAppData;
  }
}

// This is a shell function. Implement your own logic to persist data in an external database of your choice.
export async function setShippingAppData(data: ShippingAppData, appIdentifier: AppIdentifier): Promise<void> {
  if (isTestingToken(appIdentifier?.accessToken)) {
    return;
  }
  const databaseKey = await getDatabaseKey(appIdentifier);
  console.log('persistShippingAppData::key: ', databaseKey, ' data: ', JSON.stringify(data, null, 2));
}
