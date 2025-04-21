import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';
// Add this specifically by running
// npm i @axe-core/playwright

test('Playwright should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://playwright.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});

test('Google IS BAD should not have any automatically detectable WCAG A or AA violations', async ({ page }) => {
  await page.goto('https://google.com/');

  const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
      .analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});