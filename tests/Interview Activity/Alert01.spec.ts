import { expect, test } from "@playwright/test";


test(`Test to trigger alerts and verify the displayed text based on 
actions`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://the-internet.herokuapp.com/javascript_alerts`);
    page.once(`dialog`, async (alert) => {
        alert.dismiss();

    })
   /*  page.on(`dialog`, async (alert) => {
        alert.dismiss();

    }) */
    await page.locator(`//button[@onclick='jsConfirm()']`).click();
   // await page.waitForTimeout(3000);
    await expect(await page.locator(`#result`)).toContainText(`You clicked: Cancel`);

})