'use server';

import { createClient } from '@wix/sdk/client';
import { headers } from 'next/headers';
import { orders } from '@wix/ecom';

// This utility function initializes and returns a Wix SDK client for use only in server components.
// It is intended for scenarios where an HTTP request contains a valid authorization header,
// or an access token is explicitly provided to the function.
export const createSdk = (accessToken?: string | null) =>
  createClient({
    auth: {
      getAuthHeaders: async () => ({
        headers: accessToken
          ? {
              Authorization: accessToken,
            }
          : Object.fromEntries(headers().entries()),
      }),
    },
    modules: {
      orders,
    },
  });
