import { WixAppOAuthStrategy } from '@wix/sdk/auth/wix-app-oauth';
import { createClient } from '@wix/sdk/client';

export const wixAppClient = createClient({
  auth: WixAppOAuthStrategy({
    appId: process.env.WIX_APP_ID!,
    appSecret: process.env.WIX_APP_SECRET!,
    publicKey: process.env.WIX_APP_JWT_KEY,
  }),
});
