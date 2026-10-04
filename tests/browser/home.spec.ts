import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';

test('homepage layout, real links, images, reduced motion and desktop/mobile captures', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await mkdir('docs/screenshots', { recursive: true });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [1440, 1920, 1024, 768, 390, 360]) {
    await page.setViewportSize({ width, height: width > 800 ? 1000 : 844 });
    await page.goto('/');
    await expect(page.getByRole('heading', { level: 1 })).toContainText('Built on experience.');
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((image) => (image.loading = 'eager'));
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).map((image) => image.decode()));
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        window.scrollTo(0, y);
        await new Promise((resolve) => setTimeout(resolve, 50));
      }
      window.scrollTo(0, 0);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    await expect
      .poll(() => page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth))
      .toBe(true);
    await expect
      .poll(() =>
        page
          .locator('img')
          .evaluateAll((images) =>
            images.every(
              (image) =>
                (image as HTMLImageElement).complete &&
                (image as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    if (width === 1440 || width === 390) {
      await page.screenshot({ path: `docs/screenshots/v2-home-${width}-full.png`, fullPage: true });
      await page.screenshot({ path: `docs/screenshots/v2-home-${width}-viewport.png` });
      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
        .analyze();
      expect(
        results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
      ).toEqual([]);
    }
  }
  expect(errors).toEqual([]);
});

test('SKU search, product details and persistent quote quantities work', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Search products or SKU' }).click();
  await expect(page.getByRole('dialog')).toBeVisible();
  await page.getByLabel('Quick product / SKU search', { exact: true }).fill('1527D21');
  await page.getByRole('button', { name: 'Search', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'Connexion Gin Cocktail', exact: true }),
  ).toBeVisible();
  await expect(page.locator('.product-card')).toHaveCount(1);
  await page.getByRole('link', { name: 'View details' }).click();
  await expect(page.getByRole('heading', { level: 1 })).toHaveText('Connexion Gin Cocktail');
  await page.getByRole('button', { name: 'Add Connexion Gin Cocktail to Quote List' }).click();
  await page.getByRole('link', { name: 'Review Requirement' }).click();
  const quantity = page.getByRole('spinbutton', { name: 'Quantity for Connexion Gin Cocktail' });
  await quantity.fill('24');
  await page.reload();
  await expect(quantity).toHaveValue('24');
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: 'Download requirement' }).click();
  expect((await downloadPromise).suggestedFilename()).toBe('sri-chakra-requirement.txt');
  await page.getByRole('button', { name: 'Remove Connexion Gin Cocktail' }).click();
  await expect(page.getByRole('heading', { name: 'A good place to start.' })).toBeVisible();
});

test('mobile menu and search close with Escape and restore focus', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const menu = page.getByRole('button', { name: 'Open menu' });
  await menu.click();
  await expect(page.getByRole('navigation', { name: 'Mobile navigation' })).toBeVisible();
  await page.keyboard.press('Escape');
  await expect(menu).toBeFocused();
  const search = page.getByRole('button', { name: 'Search products or SKU' });
  await search.click();
  await page.keyboard.press('Escape');
  await expect(search).toBeFocused();
});

test('navigation destinations, unknown products and empty searches behave honestly', async ({
  page,
}) => {
  for (const path of [
    '/brands',
    '/brands/ocean',
    '/brands/kolorr',
    '/brands/kohe',
    '/brands/kangaro',
    '/catalogues',
    '/about',
    '/products',
    '/quote',
  ]) {
    const response = await page.goto(path);
    expect(response?.status()).toBe(200);
    await expect(page.getByRole('heading', { level: 1 })).toBeVisible();
  }
  await page.goto('/products?q=nonexistent-sku');
  await expect(page.getByRole('heading', { name: 'Let’s find what you need.' })).toBeVisible();
  await page.goto('/products/unknown-product');
  await expect(page.getByRole('heading', { name: 'Let’s find your centre.' })).toBeVisible();
});

test('content and catalogue discovery remain available without JavaScript', async ({ browser }) => {
  const context = await browser.newContext({ javaScriptEnabled: false });
  const page = await context.newPage();
  await page.goto(`${process.env.PLAYWRIGHT_BASE_URL ?? 'http://localhost:3000'}/`);
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Built on experience.');
  await page.getByRole('link', { name: 'Explore Products', exact: true }).first().click();
  await expect(page.locator('.product-card')).toHaveCount(5);
  await context.close();
});

test('geometry assembles on scroll and product/quote pages pass automated accessibility checks', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (error) => errors.push(error.message));
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  const triangle = page.locator('.signature-triangles polygon').first();
  await expect(page.locator('.signature-section')).toHaveAttribute('data-mode', 'desktop');
  await page.evaluate(() => {
    const section = document.querySelector('.signature-section')!;
    window.scrollTo({
      top:
        section.getBoundingClientRect().top +
        window.scrollY +
        (section.clientHeight - innerHeight) * 0.25,
      behavior: 'instant',
    });
  });
  await expect(triangle).toHaveAttribute('style', /translateX/);
  await expect(triangle).toHaveAttribute('style', /transform/);
  const before = await triangle.getAttribute('style');
  await page.evaluate(() => {
    const section = document.querySelector('.signature-section')!;
    window.scrollTo({
      top:
        section.getBoundingClientRect().top +
        window.scrollY +
        (section.clientHeight - innerHeight) * 0.65,
      behavior: 'instant',
    });
  });
  await expect.poll(() => triangle.getAttribute('style')).not.toBe(before);
  await page.screenshot({ path: 'docs/screenshots/v2-geometry-desktop.png' });
  for (const path of ['/products/ocean-connexion-gin-cocktail', '/quote']) {
    await page.goto(path);
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      results.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  }
  expect(errors).toEqual([]);
});
