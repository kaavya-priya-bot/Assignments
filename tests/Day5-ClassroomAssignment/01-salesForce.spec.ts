import { test } from "@playwright/test";

test(`SalesForce: get the xpath for "Subject" label web element`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto("https://login.salesforce.com/?locale=in");
    const url = page.url()
    console.log(`The url of the page is ${url}`);
    await page.waitForLoadState("domcontentloaded");
    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
    await page.locator("#password").fill(`RaviSalesTest#1432`);
    //await page.locator("#username").fill(`udaya18udai318@agentforce.com`);
    //await page.locator("#password").fill(`Sales@123`);
    await page.locator("#Login").click();
    await page.waitForTimeout(3000);
    await page.locator("//input[contains(@title,'Search')]/following::li[2]//div/a").click();
    //await page.getByRole("document", { name: "Home | Salesforce" }).click();
    await page.locator("//a[contains(@title,'New Task')]").click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForTimeout(3000);
    let subjectLocator= await page.locator("//span[text()='Due Date']/preceding::lightning-grouped-combobox/label");
    if (await subjectLocator.innerText() === 'Subject') {
        console.log("Subject locator fetched");
    }
    else {
        console.log("subject locator not found");
    }
    /* const labelLocators = await page.locator("//span[text()='Due Date']/preceding::label");
    let flag = 0;
    for (let i = 0; i < await labelLocators.count(); i++) {
        if (await labelLocators.nth(i).innerText() === 'Subject') {
            const subjectLocator = await labelLocators.nth(i);
            console.log("Subject locator fetched through iteration");
            flag = 1;
            break;
        }
    }
    if (flag === 0) {
        console.log("subject locator not found");
    } */


    /* console.log("Subject inner text: "+subjectInnerText);
    let subjectLocator=await page.locator("//h2[@title='New Task']/following::label[text()="+subjectInnerText+"]");
    console.log(subjectLocator.locator); */
    await page.waitForTimeout(1000);

});