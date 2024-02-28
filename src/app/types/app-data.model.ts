import { DeliveryLogistics } from '@/app/types/shipping-provider-spi';
/**
 * The unit of measure to calculate the shipping cost.
 */
export enum ShippingUnitOfMeasure {
  /** Calculate the shipping cost by the number of items included in the order */
  NUM_OF_ITEMS = 'NUM_OF_ITEMS',

  /** Calculate the shipping cost by the weight of the order in Kilograms. */
  WEIGHT_IN_KG = 'WEIGHT_IN_KG',

  /** Calculate the shipping cost by the weight of the order in pounds. */
  WEIGHT_IN_LB = 'WEIGHT_IN_LB',
}

/**
 * Enum for different types of shipping methods.
 */
export enum ShippingMethodType {
  /** Standard shipping method. */
  STANDARD = 'STANDARD',

  /** Express shipping method. */
  EXPRESS = 'EXPRESS',
}

/**
 * Interface for defining shipping costs, based on the number of items or weight.
 * This is only an example, you should define your own logic
 */
export interface ShippingCosts {
  /** Cost for the first item/KG/LB. */
  first: number;

  /** Cost for the second item/KG/LB. */
  second: number;

  /** Cost for the third and subsequent items/KGs/LBs */
  thirdAndUp: number;
}

/**
 * Interface representing the shipping data specific to the application.
 * It is used in order to create the shipping methods required by the SPI
 */
export interface ShippingAppData {
  /** Array of shipping methods, each representing the cost of the order using this delivery method */
  shippingMethods: {
    /** Unique code for the shipping method. */
    code: string;

    /** Title of the shipping method to be presented to the user */
    title: string;

    /** Optional logistics information, i.e. `logistics.deliveryTime = "3-5 business days"` */
    logistics?: DeliveryLogistics;

    /** Type of the shipping method (e.g., STANDARD, EXPRESS). */
    type: ShippingMethodType;

    /** Unit of measure used (e.g., NUM_OF_ITEMS, WEIGHT_IN_KG). */
    unitOfMeasure: ShippingUnitOfMeasure;

    /** Cost details for the shipping method. */
    costs: ShippingCosts;
  }[];
}
