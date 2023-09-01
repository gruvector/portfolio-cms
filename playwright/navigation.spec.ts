import { expect, test } from '@playwright/test';

test('Navigate and check content', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByTestId('myHero')).toBeVisible();
  await expect(page.getByTestId('about')).toBeVisible();
  await expect(page.getByTestId('portfolio')).toBeVisible();
  await expect(page.getByTestId('footer')).toBeVisible();

  await page.getByRole('link', { name: 'Portfolio' }).click();
  await page.waitForURL('/#portfolio');
  await expect(page.getByTestId('portfolio')).toBeInViewport();

  await page.getByRole('link', { name: 'About me' }).click();
  await page.waitForURL('/#about');
  await expect(page.getByTestId('about')).toBeInViewport();
});
