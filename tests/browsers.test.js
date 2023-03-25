// @ts-check
import { test } from '@playwright/test';

import _config from '../_config';

test('Test browsers', async ({ page }) => {
  await page.goto(`${_config.server.host}:${_config.server.port}`);
  await page.pause();
});
