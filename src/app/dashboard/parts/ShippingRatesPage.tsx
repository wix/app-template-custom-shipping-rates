'use client';
import '@wix/design-system/styles.global.css';
import { AppProviders } from '@/app/utils/client-providers';
import { ShippingRatesPageContent } from '@/app/dashboard/parts/ShippingRatesPageContent';
import { Suspense } from 'react';

export const ShippingRatesPage = ({ }: {}) => {
  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <ShippingRatesPageContent />
      </Suspense>
    </AppProviders>
  );
};
