'use client';
import '@wix/design-system/styles.global.css';
import { AppProviders } from '@/app/utils/client-providers';
import { ShippingRatesPageContent } from '@/app/dashboard/parts/ShippingRatesPageContent';

export const ShippingRatesPage = ({}: {}) => {
  return (
    <AppProviders>
      <ShippingRatesPageContent />
    </AppProviders>
  );
};
