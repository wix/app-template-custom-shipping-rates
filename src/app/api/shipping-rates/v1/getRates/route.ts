import { getShippingAppData } from '@/app/actions/app-data';
import { GetShippingRatesData, GetShippingRatesResponse } from '@/app/types/shipping-provider-spi';
import { calculatePrice } from '@/app/utils/shipping-calculator';
import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { SPIDefinition } from '@wix/sdk';

export async function POST(request: Request) {
  console.info('Shipping rates::POST - called');
  const shippingRatesSPI = wixAppClient.spi<SPIDefinition<GetShippingRatesData, GetShippingRatesResponse>>();

  // Verify that the data was not altered, and get the input.
  const input = await shippingRatesSPI.processRequest(request);

  const appData = await getShippingAppData({ instanceId: input.metadata.instanceId });

  const currency = input.metadata.currency;

  // Return the shipping rates.
  const result = shippingRatesSPI.result({
    shippingRates: appData.shippingMethods.map(({ code, title, logistics, costs, unitOfMeasure }) => ({
      code,
      title,
      logistics,
      cost: {
        price: `${calculatePrice(input.request, costs, unitOfMeasure)}`,
        currency,
      },
    })),
  });

  return Response.json(result);
}
