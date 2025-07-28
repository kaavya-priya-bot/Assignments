import { chromium, test } from "@playwright/test"

test("Learn css using LeafTaps", async ({ page }) => {
    await page.goto("http://leaftaps.com/opentaps/control/main");
    //await page.waitForTimeout(3000);

    const url = page.url()


    console.log(`The url of the page is ${url}`);

    await page.locator("#username").fill(`democsr`);
    await page.locator("#password").fill(`crmsfa`);
    await page.locator(".decorativeSubmit").click();
    await page.waitForTimeout(3000);
})