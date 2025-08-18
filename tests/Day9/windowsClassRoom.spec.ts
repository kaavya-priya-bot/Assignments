import { chromium, expect, test } from "@playwright/test";

test.only(`Window Handling ClassRoom`, async ({context,page}) =>{
    page.setDefaultTimeout(100000);
/**Login to Salesforce**/
await page.goto("https://login.salesforce.com/");
await page.locator("#username").fill("ravindran.ramdas@testleaf.com");
await page.locator("#password").fill("RaviSalesTest#1432");
await page.waitForTimeout(5000);
await page.locator("#Login").click();
await page.waitForTimeout(5000);
console.log(`Page URL : ${page.url()}`);
console.log(`Page Title : ${await page.title()}`);

const [page2] = await Promise.all([
    context.waitForEvent("page"),
    page.click("//*[text()='Learn More']/..")

])

await page2.click("//button[text()='Confirm']");
let page2Title = await page2.title();
console.log(`Page 2 Title : ${page2Title}`);
expect(page2Title).toEqual("Service Cloud: AI-powered Customer Service Agent Console | Salesforce US");
})