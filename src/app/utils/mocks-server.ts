import { ShippingAppData, ShippingMethodType, ShippingUnitOfMeasure } from '@/app/types/app-data.model';

export const getTestOrders = async () => ({
  orders: [
    {
      id: 'a7edafff-9549-46c2-ba8d-4ac76c866890',
      number: '10001',
      createdDate: '2024-03-18T15:04:01.554Z',
      _createdDate: '2024-03-18T15:04:01.554Z',
      updatedDate: '2024-03-18T15:04:10.486Z',
      lineItems: [
        {
          id: '00000000-0000-0000-0000-000000000001',
          productName: {
            original: "I'm a product",
          },
          catalogReference: {
            catalogItemId: 'df19c1f7-07d8-a265-42f8-e8dfa824cc6e',
            appId: '215238eb-22a5-4c36-9e7b-e7c08025e04e',
          },
          quantity: 1,
          totalDiscount: {
            amount: '0',
            formattedAmount: '€0.00',
          },
          descriptionLines: [],
          image: {
            id: '22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg',
            url: 'https://static.wixstatic.com/media/22e53e_2fee033b2eca46cab4eec7fa74e99c31~mv2.jpg',
            height: 3000,
            width: 3000,
          },
          physicalProperties: {
            sku: '364215376135191',
            shippable: true,
          },
          itemType: {
            preset: 'PHYSICAL',
          },
          price: {
            amount: '85.00',
            formattedAmount: '€85.00',
          },
          priceBeforeDiscounts: {
            amount: '85.00',
            formattedAmount: '€85.00',
          },
          totalPriceBeforeTax: {
            amount: '85.00',
            formattedAmount: '€85.00',
          },
          totalPriceAfterTax: {
            amount: '85.00',
            formattedAmount: '€85.00',
          },
          paymentOption: 'FULL_PAYMENT_ONLINE',
          taxDetails: {
            taxRate: '0',
            totalTax: {
              amount: '0',
              formattedAmount: '€0.00',
            },
          },
          locations: [],
          lineItemPrice: {
            amount: '85.00',
            formattedAmount: '€85.00',
          },
        },
      ],
      buyerInfo: {
        contactId: '60aec7f9-c12f-4a4c-8326-93116828d09f',
        email: 'dan_demo@wix.com',
        memberId: '60aec7f9-c12f-4a4c-8326-93116828d09f',
      },
      paymentStatus: 'NOT_PAID',
      fulfillmentStatus: 'NOT_FULFILLED',
      buyerLanguage: 'en',
      weightUnit: 'KG',
      currency: 'EUR',
      taxIncludedInPrices: false,
      priceSummary: {
        subtotal: {
          amount: '85.00',
          formattedAmount: '€85.00',
        },
        shipping: {
          amount: '0',
          formattedAmount: '€0.00',
        },
        tax: {
          amount: '0',
          formattedAmount: '€0.00',
        },
        discount: {
          amount: '0',
          formattedAmount: '€0.00',
        },
        total: {
          amount: '85.00',
          formattedAmount: '€85.00',
        },
        totalWithGiftCard: {
          amount: '85.00',
          formattedAmount: '€85.00',
        },
        totalWithoutGiftCard: {
          amount: '85.00',
          formattedAmount: '€85.00',
        },
        totalAdditionalFees: {
          amount: '0',
          formattedAmount: '€0.00',
        },
      },
      billingInfo: {
        contactDetails: {
          firstName: 'Dan',
          lastName: 'Smith (Demo)',
          company: '',
        },
      },
      status: 'APPROVED',
      archived: false,
      taxSummary: {
        totalTax: {
          amount: '0',
          formattedAmount: '€0.00',
        },
      },
      appliedDiscounts: [],
      activities: [
        {
          id: '18cc9c07-4aad-42ed-b046-75d328d86e4a',
          createdDate: '2024-03-18T15:04:01.544Z',
          type: 'ORDER_PLACED',
        },
      ],
      attributionSource: 'UNSPECIFIED',
      createdBy: {
        userId: '2be6844c-217f-4267-8577-9a3ecccf5883',
      },
      channelInfo: {
        type: 'BACKOFFICE_MERCHANT',
      },
      seenByAHuman: true,
      customFields: [],
      isInternalOrderCreate: false,
      balanceSummary: {
        balance: {
          amount: '85.00',
          formattedAmount: '€85.00',
        },
        paid: {
          amount: '0.00',
          formattedAmount: '€0.00',
        },
        refunded: {
          amount: '0.00',
          formattedAmount: '€0.00',
        },
      },
      additionalFees: [],
    },
  ],
  metadata: {
    count: 1,
    cursors: {},
    hasNext: false,
  },
});

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
