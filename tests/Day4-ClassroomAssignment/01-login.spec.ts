import { chromium, test } from "@playwright/test"

test("Learn css using LeafTaps", async ({ page }) => {
    await page.goto("https://login.salesforce.com/?locale=in");
    //await page.waitForTimeout(3000);

    const url = page.url()


    console.log(`The url of the page is ${url}`);

    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
    await page.locator("#password").fill(`RaviSalesTest#1432`);
    await page.locator("#Login").click();
    await page.waitForTimeout(6000);
})