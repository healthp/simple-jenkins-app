// @ts-check
const { test, expect } = require('@playwright/test');

test('has title', async ({ page }) => {
  await page.goto('/');
  await page.waitForLoadState('load'); // Ensure page is fully loaded
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Simple Jenkins/);
});

test('has Jenkins in the body', async ({ page }) => {
  await page.goto('/'); // If needed, ensure the page is loaded
  await page.waitForLoadState('load'); // Ensure page is fully loaded
  await page.waitForSelector('a:has-text("Simple Jenkins")', { state: 'visible',timeout: 60000 });
  const isVisible = await page.locator('a:has-text("Simple Jenkins")').isVisible();
  console.log('Is element visible:', isVisible); // Log visibility for debugging
  expect(isVisible).toBeTruthy();
});

test('has expected app version', async ({ page }) => {
  await page.goto('/');

  const expectedAppVersion = process.env.REACT_APP_VERSION ? process.env.REACT_APP_VERSION : '1';

  console.log(expectedAppVersion);

  const isVisible = await page.locator(`p:has-text("Application version: ${expectedAppVersion}")`).isVisible();
  expect(isVisible).toBeTruthy();
});
