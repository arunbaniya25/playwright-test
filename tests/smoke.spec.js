const { test, expect } = require('@playwright/test');

test('homepage responds and renders visible content', async ({ page, baseURL }) => {
  test.skip(!baseURL, 'BASE_URL must be set to the website you want to test.');

  const response = await page.goto('/', { waitUntil: 'domcontentloaded' });

  expect(response, 'Expected the homepage request to return a response').not.toBeNull();
  expect(response.ok(), `Expected ${baseURL} to respond successfully`).toBeTruthy();

  await expect(page.locator('body')).toContainText(/\S+/);
});