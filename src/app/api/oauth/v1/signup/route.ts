import { wixAppClient } from '@/app/utils/wix-sdk.app';
import { redirect } from 'next/navigation';
import { type NextRequest } from 'next/server';

export async function GET(request: NextRequest) {
  const { accessToken, instanceId, refreshToken } = await wixAppClient.auth.handleOAuthCallback(request.url);

  // Store the mapping between instance IDs and refresh tokens in an external database, so you can issue new access tokens by app instance.
  // For further details, read about [Authentication in the documentation](https://dev.wix.com/docs/rest/articles/getting-started/authentication).

  console.log('Received OAuth refresh and access tokens: ', {
    accessToken,
    refreshToken,
    instanceId: instanceId,
  });

  return redirect(`https://www.wix.com/installer/close-window?access_token=${accessToken}`);
}
