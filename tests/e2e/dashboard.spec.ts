import { test, expect } from '@playwright/test';
import testIds from '@/app/utils/test-ids';

test.describe('Dashboard Page', () => {
  const PATH = '/dashboard?accessToken=test-token';

  test('look and feel - default', async ({ page }) => {
    await page.goto(PATH);

    await page.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD_EXPAND).waitFor({ state: 'visible', timeout: 5000 });

    await expect(page.getByTestId(testIds.DASHBOARD.WRAPPER)).toHaveScreenshot('dashboard-default.png');
  });

  test('look and feel - expand express method', async ({ page }) => {
    await page.goto(PATH);

    await page.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD_EXPAND).waitFor({ state: 'visible', timeout: 5000 });

    const [_, expressMethod] = await page.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD).all();

    // expand
    await expressMethod.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD_EXPAND).click();
    // collapse
    await expressMethod.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD_EXPAND).click();
    // expand again
    await expressMethod.getByTestId(testIds.DASHBOARD.SHIPPING_METHOD_EXPAND).click();

    // wait for the animation to finish
    await page.waitForTimeout(2000);

    await expect(page.getByTestId(testIds.DASHBOARD.WRAPPER)).toHaveScreenshot('dashboard-expanded.png');
  });
});
