import { test } from "@playwright/test";

test(`Myntra: Select the check box of "Roadster" under the brands`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://www.myntra.com/?`);
    const url = page.url()
    console.log(`The url of the page is ${url}`);
    await page.locator(`//a[text()='Men'][@data-group='men']`).hover();
    //await page.getByRole('link', { name: 'Men', exact: true }).click();
    //await page.locator(`//a[text()='Topwear']//following::a[text()='T-Shirts'][1]`).click();
    await page.locator(`//a[text()='Topwear']/parent::li/following-sibling::li/a[text()='T-Shirts']`).click();
    await page.locator(`//input[@value='Roadster']/following-sibling::div`).click();
    await page.waitForTimeout(2000);
})