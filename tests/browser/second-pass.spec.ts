import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
import { mkdir } from 'node:fs/promises';
test('About story has five chapters, both founders and desktop/mobile review captures', async ({
  page,
}) => {
  await mkdir('docs/screenshots', { recursive: true });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  for (const width of [1440, 390]) {
    await page.setViewportSize({ width, height: width === 1440 ? 1000 : 844 });
    await page.goto('/about');
    await expect(page.locator('.chapter-index')).toHaveCount(4);
    await expect(page.getByText('05 / Looking ahead')).toBeVisible();
    await expect(
      page.getByRole('heading', { name: 'MVN Malleshwar Rao', exact: true }),
    ).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Neelima Matta', exact: true })).toBeVisible();
    await page.evaluate(async () => {
      document.querySelectorAll('img').forEach((image) => (image.loading = 'eager'));
      await document.fonts.ready;
      await Promise.all(Array.from(document.images).map((image) => image.decode()));
      for (let y = 0; y < document.body.scrollHeight; y += 600) {
        scrollTo(0, y);
        await new Promise((r) => setTimeout(r, 40));
      }
      scrollTo(0, 0);
      await new Promise((resolve) => requestAnimationFrame(() => requestAnimationFrame(resolve)));
    });
    await expect
      .poll(() =>
        page
          .locator('img')
          .evaluateAll((images) =>
            images.every(
              (i) => (i as HTMLImageElement).complete && (i as HTMLImageElement).naturalWidth > 0,
            ),
          ),
      )
      .toBe(true);
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(
      true,
    );
    await page.screenshot({ path: `docs/screenshots/v2-about-${width}-full.png`, fullPage: true });
    await page.screenshot({ path: `docs/screenshots/v2-about-${width}-viewport.png` });
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(
      result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) })),
    ).toEqual([]);
  }
});
test('early SKU search, filters, variant image and quantities remain connected', async ({
  page,
}) => {
  await page.goto('/');
  await page.getByLabel('Search by product, SKU, brand or collection').fill('K-Class Pro 750');
  await page.getByRole('button', { name: 'Find products' }).click();
  await expect(page).toHaveURL(/products\?q=/);
  await expect(page.locator('.product-card')).toHaveCount(1);
  await page.getByRole('link', { name: 'Choose options +' }).click();
  await expect(page.getByLabel('Capacity / option')).toHaveValue('kohe-class-750');
  await expect(page.locator('.product-detail-image img')).toHaveAttribute('src', /kohe-class-750/);
  await page.getByLabel('Requested pieces', { exact: true }).fill('12');
  await page.getByRole('button', { name: 'Add K-Class Pro Vacuum Flask to Quote List' }).click();
  await page.getByLabel('Capacity / option').selectOption('kohe-class-1000');
  await expect(page.locator('.product-detail-image img')).toHaveAttribute('src', /kohe-class.webp/);
  await expect(page.getByText('Manufacturer SKU: K Class Pro 1000', { exact: true })).toBeVisible();
  await page.getByLabel('Requested pieces', { exact: true }).fill('24');
  await page.getByRole('button', { name: 'Add K-Class Pro Vacuum Flask to Quote List' }).click();
  await page.getByRole('link', { name: 'Review Requirement' }).click();
  await expect(page.locator('.quote-item')).toHaveCount(2);
  await page.reload();
  await expect(
    page.locator('.quote-item').filter({ hasText: '750 ml' }).getByRole('spinbutton'),
  ).toHaveValue('12');
  await expect(
    page.locator('.quote-item').filter({ hasText: '1,000 ml' }).getByRole('spinbutton'),
  ).toHaveValue('24');
  await page.goto('/products?brand=ocean&category=storage');
  await expect(page.locator('.product-card')).toHaveCount(0);
  await page.goto('/products?brand=ocean&category=glassware');
  await expect(page.locator('.product-card')).toHaveCount(3);
});
test('four-sided scroll assembly resolves in stages and respects mobile and reduced motion', async ({
  page,
}) => {
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await page.goto('/');
  await expect(page.locator('.signature-section')).toHaveAttribute('data-mode', 'desktop');
  await expect(page.locator('.stage-boundary')).toHaveCount(4);
  await expect(page.locator('.signature-triangles polygon')).toHaveCount(9);
  const seek = async (progress: number) => {
    await page.evaluate((n) => {
      const s = document.querySelector('.signature-section') as HTMLElement;
      scrollTo({ top: s.offsetTop + (s.clientHeight - innerHeight) * n, behavior: 'instant' });
    }, progress);
    await page.waitForTimeout(120);
  };
  await seek(0.3);
  await expect(page.locator('.signature-rings')).toHaveCSS('opacity', '0');
  await expect(page.locator('.signature-bindu')).toHaveCSS('opacity', '0');
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '0');
  await expect(page.locator('.signature-triangles polygon').first()).toHaveAttribute(
    'style',
    /translateX/,
  );
  await page.screenshot({ path: 'docs/screenshots/v2-signature-desktop-assembly.png' });
  await seek(0.76);
  await expect(page.locator('.signature-bindu')).toHaveCSS('opacity', '0');
  await page.screenshot({ path: 'docs/screenshots/v2-signature-desktop-rings.png' });
  await seek(0.87);
  await expect(page.locator('.signature-bindu')).toHaveCSS('opacity', '1');
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '0');
  await seek(1);
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '1');
  await expect(page.locator('.boundary-0')).toHaveCSS('transform', 'none');
  await expect(page.locator('.boundary-3')).toHaveCSS('transform', 'none');
  await page.screenshot({ path: 'docs/screenshots/v2-signature-desktop-complete.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  await expect(page.locator('.signature-section')).toHaveAttribute('data-mode', 'mobile');
  await page.locator('.signature-stage').scrollIntoViewIfNeeded();
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '1', { timeout: 7000 });
  expect(await page.locator('.signature-section').evaluate((e) => e.clientHeight)).toBeLessThan(
    750,
  );
  await page.screenshot({ path: 'docs/screenshots/v2-signature-mobile-complete.png' });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('.signature-section')).toHaveAttribute('data-mode', 'static');
  await expect(page.locator('.signature-message')).toHaveCSS('opacity', '1');
});
