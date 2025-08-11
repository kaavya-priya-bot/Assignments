import { test, expect } from '@playwright/test';

test('Handle single and nested iframes', async ({ page }) => {
  // Precondition: Launch Chromium in non-headless mode is set in playwright.config.ts
  
  // Step 1: Navigate to the page
  await page.goto('https://leafground.com/frame.xhtml');

  // Step 2: Interact with Click Me inside single iframe
  const singleFrame = page.frameLocator('iframe[src="default.xhtml"]');
  const clickButton = singleFrame.locator('#Click');
  await clickButton.click();

  // Assert text changed
  await expect(clickButton).toHaveText('Hurray! You Clicked Me.');

  // Step 3: Count all iframes in the page
  const frameCount = await page.locator('iframe').count();
  console.log(`Total frames on page: ${frameCount}`);

  // Step 4: Interact with Click Me inside nested frames
const card = page.locator(".card").filter({hasText:"Inside Nested frame "})
    const frame_outerframe=card.frameLocator(`iframe`);
    const frame_innerframe = frame_outerframe.frameLocator(`iframe`)

     await frame_innerframe.locator("#Click").click();

    const innerClick =  frame_innerframe.locator("#Click")

  // Assert text changed
  expect(innerClick).toHaveText('Hurray! You Clicked Me.');

  await page.waitForTimeout(3000)
});
