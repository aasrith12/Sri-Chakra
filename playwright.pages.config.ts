import { defineConfig } from '@playwright/test';
export default defineConfig({
  testDir: './tests/pages',
  outputDir: 'test-results/pages',
  workers: 1,
  timeout: 60000,
  use: { channel: 'chrome', headless: true, trace: 'retain-on-failure' },
});
