import { chromium, test } from "@playwright/test"
test("Create New Account ", async () => {
    const browser = await chromium.launch({ channel: "msedge", headless: true })
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.setViewportSize({ width: 1550, height: 800 });

    await page.goto(`https://login.salesforce.com/?locale=in`);
    //console.log(await page.title());
    await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`);//Enter the username
    await page.getByLabel(`Password`).fill(`RaviSalesTest#1432`);//Enter the password
    await page.locator(`#Login`).click();// Click Login 

    await page.waitForTimeout(10000);//wait for 10 seconds 

    const pageTitle=await page.title();
    const url=await page.url();
    console.log(`The url of the page is ${url}`);
    console.log(`The title of the page is ${pageTitle}`);

    page.close();

})