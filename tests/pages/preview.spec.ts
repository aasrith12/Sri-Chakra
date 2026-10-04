import { test, expect } from '@playwright/test';
const base = process.env.PAGES_PREVIEW_URL ?? 'http://127.0.0.1:3100/Sri-Chakra';
test('Pages preview keeps subpath assets, SKU search, filters, options and quote persistence working', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  const failures: string[] = [];
  page.on('response', (r) => {
    if (r.status() >= 400) failures.push(r.url());
  });
  await page.goto(base + '/');
  await page.evaluate(async () => {
    document.querySelectorAll('img').forEach((i) => (i.loading = 'eager'));
    await Promise.all(Array.from(document.images).map((i) => i.decode()));
  });
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Built on experience.');
  expect(
    await page
      .locator('img')
      .evaluateAll((images) =>
        images.every((i) =>
          new URL((i as HTMLImageElement).src).pathname.startsWith('/Sri-Chakra/brands/'),
        ),
      ),
  ).toBe(true);
  await page.getByLabel('Search by product, SKU, brand or collection').fill('1527D21');
  await page.getByRole('button', { name: 'Find products' }).click();
  await expect(page).toHaveURL(/Sri-Chakra\/products\/\?q=1527D21/);
  await expect(page.locator('.product-card')).toHaveCount(1);
  await page.getByRole('link', { name: 'View details' }).click();
  await page.getByLabel('Requested pieces', { exact: true }).fill('24');
  await page.getByRole('button', { name: 'Add Connexion Gin Cocktail to Quote List' }).click();
  await page.getByRole('link', { name: 'Review Requirement' }).click();
  await expect(page).toHaveURL(/Sri-Chakra\/quote\//);
  await expect(page.locator('.quote-item').getByRole('spinbutton')).toHaveValue('24');
  await page.reload();
  await expect(page.locator('.quote-item').getByRole('spinbutton')).toHaveValue('24');
  await page.goto(base + '/products/?brand=kohe');
  await expect(page.locator('.product-card')).toHaveCount(1);
  await page.getByRole('link', { name: 'Choose options +' }).click();
  await page.getByLabel('Capacity / option').selectOption('kohe-class-1000');
  await expect(page.getByText('Manufacturer SKU: K Class Pro 1000', { exact: true })).toBeVisible();
  await page.goto(base + '/products/');
  await page.locator('#brand-filter').selectOption('kolorr');
  await page.getByRole('button', { name: 'Apply filters' }).click();
  await expect(page.locator('.product-card')).toHaveCount(1);
  await expect(
    page.getByRole('heading', { name: 'Claro Storage Basket', exact: true }),
  ).toBeVisible();
  await page.goto(base + '/quote/?for=Hotels');
  await expect(page.getByLabel('Additional requirements')).toHaveValue('Requirement for Hotels');
  await page.goto(base + '/about/');
  await expect(page.getByRole('heading', { name: 'Neelima Matta', exact: true })).toBeVisible();
  expect(errors).toEqual([]);
  expect(failures).toEqual([]);
});
test('Pages preview serves mobile content and the reduced-motion composition', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto(base + '/');
  await expect(page.locator('.signature-section')).toHaveAttribute('data-mode', 'static');
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '1');
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'Open menu' }).click();
  await page
    .getByRole('navigation', { name: 'Mobile navigation' })
    .getByRole('link', { name: 'About', exact: true })
    .click();
  await expect(page).toHaveURL(/Sri-Chakra\/about\//);
});
