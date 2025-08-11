import { expect, test } from "@playwright/test";


test(`Test to interact with the frames and assert using URL`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://leafground.com/frame.xhtml`);
    //Getting total no of frames in the page
    const allframes = page.frames();
    console.log(`Total no of frames in the page is ${allframes.length}`);
    //Assert the text change after clicking the button by switching to the frame using frame locator
    const firstFrame = page.frameLocator(`iframe[src='default.xhtml']`);
    const clickButton = firstFrame.locator("#Click");
    await clickButton.click();
    await expect(clickButton).toContainText(`Hurray! You Clicked Me.`);
    //Assert the text change after clicking the button in nested frame
    const card = page.locator(".card").filter({ hasText: "Inside Nested frame" });
    const frame_outerframe = card.frameLocator("iframe");
    const frame_innerframe = frame_outerframe.frameLocator("iframe");
    const clkInInnerFrame = frame_innerframe.locator("#Click");
    await clkInInnerFrame.click();
    await expect(clkInInnerFrame).toContainText(`Hurray! You Clicked Me.`);
})