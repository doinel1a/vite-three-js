// @ts-check
import { expect, test } from '@playwright/test';

import _config from '../_config';

const HOST = _config.server.host;
const PORT = _config.server.port;

test('Test browsers', async ({ page }) => {
  await page.goto(`http://${HOST}:${PORT}`);
  await expect(page.locator('#canvas')).toBeVisible();
});
