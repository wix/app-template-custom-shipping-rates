import { useSDK } from '@/app/utils/wix-sdk.client';
import { Box, Card, Text, TextButton } from '@wix/design-system';
import { WixPageId } from '@/app/utils/navigation.const';

export function ActivationDetailsCard() {
  const {
    dashboard: { navigate },
  } = useSDK();
  return (
    <Card hideOverflow>
      <Card.Header title='Activation' />
      <Card.Divider />
      <Card.Content>
        <Text>To apply your custom shipping rate logic, activate it as follows:</Text>
        <Box paddingTop='SP3'>
          <Text>
            <ol style={{ marginBottom: '0' }}>
              <li style={{ marginBottom: '0', marginLeft: '24px' }}>
                Go to the{' '}
                <TextButton onClick={() => navigate(WixPageId.SHIPPING_INFO)}>
                  Shipping and Delivery Settings
                </TextButton>{' '}
                dashboard page.
              </li>
              <li style={{ marginBottom: '0', marginLeft: '24px' }}>
                Select the regions to apply the shipping rate logic to and click <b>Edit</b>.
              </li>
              <li style={{ marginBottom: '0', marginLeft: '24px' }}>
                Scroll down to <b>Installed apps</b> and click the toggle switch next to the app to enable it.
              </li>
            </ol>
          </Text>
        </Box>
      </Card.Content>
    </Card>
  );
}
