'use client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { PropsWithChildren } from 'react';
import { WixDesignSystemProvider } from '@wix/design-system';

export const AppProviders = ({ children }: PropsWithChildren) => {
  const queryClient = new QueryClient();
  return (
    // eslint-disable-next-line react/jsx-no-undef
    <WixDesignSystemProvider
      features={{
        newColorsBranding: true,
      }}
    >
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WixDesignSystemProvider>
  );
};
