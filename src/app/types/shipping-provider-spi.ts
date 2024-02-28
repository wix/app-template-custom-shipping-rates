export interface ShippingRatesProvider {}

export interface GetShippingRatesRequest {
  /** The line items to be shipped. */
  lineItems?: ProductItem[];
  /** Address to ship to. */
  shippingDestination?: Address;
  /** Address item is shipped from. This is the site owner's business address. */
  shippingOrigin?: Address;
  /** Buyer's contact details. */
  buyerContactDetails?: FullAddressContactDetails;
  /**
   * Weight measurement unit used for all items in the shipment.
   *
   * Supported values:
   * + `"KG"`: kilograms
   * + `"LB"`: pounds
   */
  weightUnit?: WeightUnit;
  /** Whether tax is included in the items' prices. */
  taxIncludedInPrices?: boolean;
  /** list of delivery preferences, for example preferred delivery code (shippingOptionId) */
  deliveryPreferences?: DeliveryPreferences;
  /**
   * __Deprecated.__ Use `purchaseFlowId` instead.
   * @internal
   */
  ecomId?: string | null;
  /** Persistent ID that correlates between the various eCommerce elements: cart, checkout, and order. */
  purchaseFlowId?: string | null;
}

export interface ProductItem {
  /** Item name. */
  name?: string;
  /** The number of items ordered. */
  quantity?: number;
  /** Reference to the item's origin catalog. */
  catalogReference?: CatalogReference;
  /** Physical properties of the item. */
  physicalProperties?: PhysicalProperties;
  /** Price of a single item after discounts. */
  price?: string;
  /**
   * For shipping rates by product group
   * @internal
   */
  shippingGroupId?: string | null;
  /** Total line item totalPrice before discounts. */
  totalPriceBeforeDiscount?: string | null;
  /** Price of a single item before discounts. */
  priceBeforeDiscount?: string | null;
  /** Total line item totalPrice after discounts. This is equal to `totalPrice` multiplied by `quantity`. */
  totalPrice?: string | null;
  /**
   * For delivery rates by delivery profile id
   * @internal
   */
  deliveryProfileId?: string | null;
  /** item delivery destination index in the shipping addresses list */
  deliveryDestinationIndex?: number | null;
  /** where the item is delivered from index in the from addresses list */
  deliveryOriginIndex?: number | null;
  /** whether tax is included in line item totalPrice */
  taxIncludedInPrice?: boolean | null;
}

/** Used for grouping line items and is sent on add to cart */
export interface CatalogReference {
  /** ID of the item within its Wix or 3rd-party catalog. For example, `productId` for Wix Stores or `bookingId` for Wix Bookings. */
  catalogItemId?: string;
  /**
   * ID of the app providing the catalog. For items from Wix apps, the following values always apply:
   * + Wix Stores: `"215238eb-22a5-4c36-9e7b-e7c08025e04e"`
   * + Wix Bookings: `"13d21c63-b5ec-5912-8397-c3a5ddb27a97"`
   */
  appId?: string;
  /**
   * Additional info in key:value pairs. For example, to specify Wix Stores product options or variants:
   * + `{"options": {"options": {"Size": "M", "Color": "Red"}}}`
   * + `{"options": {"variantId": "<VARIANT_ID>"}}`
   */
  options?: Record<string, any> | null;
}

export interface PhysicalProperties {
  /** Line item weight. Measurement unit (KG or LB) is taken from `order.weightUnit`. */
  weight?: number | null;
  /** Stock-keeping unit. Learn more about [SKUs](https://www.wix.com/encyclopedia/definition/stock-keeping-unit-sku). */
  sku?: string | null;
  /** Whether this line item is shippable. */
  shippable?: boolean;
}

/** Physical address */
export interface Address extends AddressStreetOneOf {
  /** Street name and number. */
  streetAddress?: StreetAddress;
  /** Main address line, usually street and number as free text. */
  addressLine?: string | null;
  /** Country code. */
  country?: string | null;
  /** Subdivision. Usually a state, region, prefecture, or province code, according to [ISO 3166-2](https://en.wikipedia.org/wiki/ISO_3166-2). */
  subdivision?: string | null;
  /** City name. */
  city?: string | null;
  /** Zip/postal code. */
  postalCode?: string | null;
  /** Free text providing more detailed address info. Usually contains Apt, Suite, and Floor. */
  addressLine2?: string | null;
  /**
   * A string containing the full address of this location.
   * @internal
   */
  formattedAddress?: string | null;
  /**
   * Free text to help find the address.
   * @internal
   */
  hint?: string | null;
  /**
   * Coordinates of the physical address.
   * @internal
   */
  geocode?: AddressLocation;
  /**
   * Country full name.
   * @internal
   */
  countryFullname?: string | null;
  /**
   * Subdivision full name.
   * @internal
   */
  subdivisionFullname?: string | null;
  /**
   * Multi-level subdivisions from top to bottom.
   * @internal
   */
  subdivisions?: Subdivision[];
}

/** @oneof */
export interface AddressStreetOneOf {
  /** Street name and number. */
  streetAddress?: StreetAddress;
  /** Main address line, usually street and number as free text. */
  addressLine?: string | null;
}

export interface StreetAddress {
  /** Street number. */
  number?: string;
  /** Street name. */
  name?: string;
  /**
   * Apartment number.
   * @internal
   */
  apt?: string;
  /**
   * Optional address line 1
   * @internal
   */
  formattedAddressLine?: string | null;
}

export interface AddressLocation {
  /** Address latitude. */
  latitude?: number | null;
  /** Address longitude. */
  longitude?: number | null;
}

export interface Subdivision {
  /** Short subdivision code. */
  code?: string;
  /** Subdivision full name. */
  name?: string;
  /**
   * Subdivision level
   * @internal
   */
  type?: SubdivisionType;
  /**
   * Free text description of subdivision methodType.
   * @internal
   */
  typeInfo?: string | null;
}

export enum SubdivisionType {
  UNKNOWN_SUBDIVISION_TYPE = 'UNKNOWN_SUBDIVISION_TYPE',
  /** State */
  ADMINISTRATIVE_AREA_LEVEL_1 = 'ADMINISTRATIVE_AREA_LEVEL_1',
  /** County */
  ADMINISTRATIVE_AREA_LEVEL_2 = 'ADMINISTRATIVE_AREA_LEVEL_2',
  /** City/town */
  ADMINISTRATIVE_AREA_LEVEL_3 = 'ADMINISTRATIVE_AREA_LEVEL_3',
  /** Neighborhood/quarter */
  ADMINISTRATIVE_AREA_LEVEL_4 = 'ADMINISTRATIVE_AREA_LEVEL_4',
  /** Street/block */
  ADMINISTRATIVE_AREA_LEVEL_5 = 'ADMINISTRATIVE_AREA_LEVEL_5',
  /** ADMINISTRATIVE_AREA_LEVEL_0. Indicates the national political entity, and is typically the highest order methodType returned by the Geocoder. */
  COUNTRY = 'COUNTRY',
}

/** Full contact details for an address */
export interface FullAddressContactDetails {
  /** Contact's first name. */
  firstName?: string | null;
  /** Contact's last name. */
  lastName?: string | null;
  /**
   * Contact's full name.
   * @internal
   */
  fullName?: string | null;
  /** Contact's phone number. */
  phone?: string | null;
  /** Contact's company name. */
  company?: string | null;
  /** Email associated with the address. */
  email?: string | null;
  /** Tax info. Currently usable only in Brazil. */
  vatId?: VatId;
}

export interface VatId {
  /** Customer's tax ID. */
  id?: string;
  /**
   * Tax methodType.
   *
   * Supported values:
   * + `CPF`: for individual tax payers
   * + `CNPJ`: for corporations
   */
  type?: VatType;
}

/** tax info types */
export enum VatType {
  UNSPECIFIED = 'UNSPECIFIED',
  /** CPF - for individual tax payers. */
  CPF = 'CPF',
  /** CNPJ - for corporations */
  CNPJ = 'CNPJ',
}

export enum WeightUnit {
  /** Weight unit can't be classified, due to an error */
  UNSPECIFIED_WEIGHT_UNIT = 'UNSPECIFIED_WEIGHT_UNIT',
  /** Kilograms */
  KG = 'KG',
  /** Pounds */
  LB = 'LB',
}

/**
 * delivery preferences, for example preferred delivery "code" (shippingOptionId).
 * enrich the delivery providers with more data about the delivery
 */
export interface DeliveryPreferences {
  preferredCode?: string | null;
}

export interface GetShippingRatesResponse {
  /** Available shipping rates. These define the shipping rate options that are displayed to site visitors on the cart and checkout pages. */
  shippingRates?: ShippingOption[];
}

export interface ShippingOption {
  /** Unique code that acts as an ID for a shipping rate. For example, `"usps_std_overnight"`. */
  code?: string;
  /** Shipping rate title. For example, `"USPS Standard Overnight Delivery"`, `"Standard"`, or `"First-Class Package International"`. */
  title?: string;
  /** Shipping logistics. */
  logistics?: DeliveryLogistics;
  /** Shipping cost. */
  cost?: ShippingPrice;
}

export interface DeliveryLogistics {
  /** When the item is expected to be delivered in free text. For example, `"3-5 business days"`. */
  deliveryTime?: string | null;
  /** Instructions for delivery. For example, for pickup: `"Ensure to come during business hours, and please don't park in the disabled spot"`. */
  instructions?: string | null;
  /** Pickup details. Should be returned only if order is for pickup. */
  pickupDetails?: PickupDetails;
  /**
   * Date and Time of the delivery option
   * @internal
   */
  deliveryTimeSlot?: DeliveryTimeSlot;
}

export interface PickupDetails {
  /** Pickup address. */
  address?: Address;
  /**
   * Pickup method.
   *
   * Supported values:
   * + `"STORE_PICKUP"`: When pickup is from the merchant's brick and mortar store.
   * + `"PICKUP_POINT"`: When item is shipped to a specified pickup point.
   */
  pickupMethod?: PickupMethod;
}

export enum PickupMethod {
  UNKNOWN_METHOD = 'UNKNOWN_METHOD',
  STORE_PICKUP = 'STORE_PICKUP',
  PICKUP_POINT = 'PICKUP_POINT',
}

export interface DeliveryTimeSlot {
  /** starting time of the delivery time slot */
  from?: Date;
  /** ending time of the delivery time slot */
  to?: Date;
}

export interface ShippingPrice {
  /** The shipping rate's totalPrice. Must align with the [currency's decimal separator](https://en.wikipedia.org/wiki/ISO_4217#Active_codes). */
  price?: string;
  /** Currency of the shipping rate totalPrice as a 3-letter [ISO-4217 currency code](https://en.wikipedia.org/wiki/ISO_4217). Must align with the `currency` passed to the function under the `metadata` field. */
  currency?: string;
  /** Additional costs. For example, a handling fee for packaging fragile items. */
  additionalCharges?: AdditionalCharge[];
}

export interface AdditionalCharge {
  /** Additional charge methodType. */
  type?: ChargeType;
  /** Details of the additional charge. For example, `"Handling fee of $5 applied for gift wrapping"`. */
  details?: string | null;
  /** Cost of additional charge. For example, `12.5`. */
  price?: string;
}

export enum ChargeType {
  HANDLING_FEE = 'HANDLING_FEE',
}

export interface MissingPostalCodeError {
  error?: ApplicationError;
}

export interface ApplicationError {
  /** Error code. */
  code?: string;
  /** Description of the error. */
  description?: string;
  /** Data related to the error. */
  data?: Record<string, any> | null;
}

export interface InvalidPostalCodeError {
  error?: ApplicationError;
}

export interface InvalidAddressError {
  fields?: FieldViolation[];
}

export interface FieldViolation {
  field?: string;
  description?: string;
  violatedRule?: RuleType;
  /** applicable when violated_rule=OTHER */
  ruleName?: string | null;
  data?: Record<string, any> | null;
}

export enum RuleType {
  VALIDATION = 'VALIDATION',
  OTHER = 'OTHER',
  MAX = 'MAX',
  MIN = 'MIN',
  MAX_LENGTH = 'MAX_LENGTH',
  MIN_LENGTH = 'MIN_LENGTH',
  MAX_SIZE = 'MAX_SIZE',
  MIN_SIZE = 'MIN_SIZE',
  FORMAT = 'FORMAT',
  DECIMAL_LTE = 'DECIMAL_LTE',
  DECIMAL_GTE = 'DECIMAL_GTE',
  DECIMAL_LT = 'DECIMAL_LT',
  DECIMAL_GT = 'DECIMAL_GT',
  DECIMAL_MAX_SCALE = 'DECIMAL_MAX_SCALE',
  INVALID_ENUM_VALUE = 'INVALID_ENUM_VALUE',
  REQUIRED_FIELD = 'REQUIRED_FIELD',
  FIELD_NOT_ALLOWED = 'FIELD_NOT_ALLOWED',
  ONE_OF_ALIGNMENT = 'ONE_OF_ALIGNMENT',
}

export interface GenericShippingRatesError {
  errors?: ApplicationError[];
}

export interface ShippingRatesConfig {
  /**
   * Base URI where the endpoints are called.
   * Wix eCommerce appends the endpoint path to the base URI.
   * For example, to call the Get Shipping Rates endpoint at `https://my-shipping-provider.com/v1/getRates`,
   * the base URI you provide here is `https://my-shipping-provider.com/`.
   */
  deploymentUri?: string;
  /** Human-readable name of the shipping provider. */
  name?: string;
  /** Description of the shipping provider. */
  description?: string | null;
  /** URL to more info about the shipping provider. */
  learnMoreUrl?: string | null;
  /** URL to reach the shipping provider app's dashboard. */
  dashboardUrl?: string | null;
  /** Whether to require the site owner to define a fallback/default rate. Set to `true` if you do not provide rates as part of the integration. */
  fallbackDefinitionMandatory?: boolean;
  /**
   * Thumbnail image of the shipping rates provider. Displayed in the shipping settings section in the Dashboard.
   * The URL must be of an image uploaded to the [Wix Media Manager](https://support.wix.com/en/article/wix-media-uploading-media-to-the-media-manager).
   */
  thumbnailUrl?: string | null;
}

/**
 * this message is not directly used by any service,
 * it exists to describe the expected parameters that SHOULD be provided to invoked Velo methods as part of open-platform.
 * e.g. SPIs, event-handlers, etc..
 * NOTE: this context object MUST be provided as the last argument in each Velo method signature.
 *
 * Example:
 * ```typescript
 * export function wixStores_onOrderCanceled(event: OrderCanceledEvent, context: Context) {
 * ...
 * }
 * ```
 */
export interface Context {
  /** A unique identifier for each request. Can be used for logging / troubleshooting */
  requestId?: string | null;
  /** 3 capital letters string representing a currency according to ISO-4217 */
  currency?: string | null;
  /** The identification methodType and identity data */
  identity?: IdentificationData;
  /** A string representing a language and region in the format of "xx-XX". First 2 letters represent the language code according to ISO 639-1. This is followed by a dash "-", and then a by 2 capital letters representing the region according to ISO 3166-2 */
  languages?: string[];
  /** App instance ID of SPI in context */
  instanceId?: string | null;
}

export enum IdentityType {
  UNKNOWN = 'UNKNOWN',
  ANONYMOUS_VISITOR = 'ANONYMOUS_VISITOR',
  MEMBER = 'MEMBER',
  WIX_USER = 'WIX_USER',
  APP = 'APP',
}

export interface IdentificationData extends IdentificationDataIdOneOf {
  /** ID of a site visitor that has not logged in to the site. */
  anonymousVisitorId?: string;
  /** ID of a site visitor that has logged in to the site. */
  memberId?: string;
  /** ID of a Wix user (site owner, contributor, etc.). */
  wixUserId?: string;
  /** ID of an app. */
  appId?: string;
  /** @readonly */
  identityType?: IdentityType;
}

/** @oneof */
export interface IdentificationDataIdOneOf {
  /** ID of a site visitor that has not logged in to the site. */
  anonymousVisitorId?: string;
  /** ID of a site visitor that has logged in to the site. */
  memberId?: string;
  /** ID of a Wix user (site owner, contributor, etc.). */
  wixUserId?: string;
  /** ID of an app. */
  appId?: string;
}
export interface GetShippingRatesMetadata {
  instanceId: string;
  languages: string[];
  currency: string;
  requestId: string;
  identity: {
    identityType: string;
    anonymousVisitorId: string;
  };
}

export interface GetShippingRatesData {
  request: GetShippingRatesRequest;
  metadata: GetShippingRatesMetadata;
}
