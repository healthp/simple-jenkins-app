// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Simple Jenkins App/);
});

test('has Jenkins in the body', async ({ page }) => {
  //await page.goto('/');
  await page.waitForSelector('a:has-text("Simple Jenkins App")', { state: 'visible' });
  const isVisible = await page.locator('a:has-text("Simple Jenkins App")').isVisible();
  expect(isVisible).toBeTruthy();
});

test('has expected app version', async ({ page }) => {
  await page.goto('/');

  const expectedAppVersion = process.env.REACT_APP_VERSION ? process.env.REACT_APP_VERSION : '1';

  console.log(expectedAppVersion);

  const isVisible = await page.locator(`p:has-text("Application version: ${expectedAppVersion}")`).isVisible();
  expect(isVisible).toBeTruthy();
});
