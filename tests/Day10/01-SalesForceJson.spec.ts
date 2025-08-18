import { test } from "@playwright/test"
import credentials from "../../Data/loginSalesForce.json";

test.describe.serial(`Login test in serial mode`, async () => {
    for (let data of credentials) {
        test(`Learn to read date from JSON ${data.TcaseId}`, async ({ page }) => {
            await page.setViewportSize({ width: 1550, height: 800 });
            await page.goto(`https://login.salesforce.com/?locale=in`);
            await page.locator(`#username`).fill(data.Username);
            await page.locator(`#password`).fill(data.Password);
            await page.locator(`#Login`).click();
        });
    }
})