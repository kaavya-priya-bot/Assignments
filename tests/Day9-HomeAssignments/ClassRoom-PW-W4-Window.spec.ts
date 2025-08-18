import { expect, test } from "@playwright/test";
import credentials from "../../Data/loginSalesForce.json";

test(`Handling multiple windows in concurrent way`, async ({ context, page }) => {

    const expectedTitle = `Service Cloud: AI-powered Customer Service Agent Console | Salesforce US`;
    const expectedURL = `https://www.salesforce.com/service/cloud/`;
    await page.goto(credentials[0].URL);
    await page.locator(`#username`).fill(credentials[0].Username);//Enter username
    await page.locator(`#password`).fill(credentials[0].Password);//Enter password 
    await page.locator(`#Login`).click();
    await page.waitForLoadState("domcontentloaded");
    await page.waitForSelector(`//button[text()='Learn More']`, { state: "visible" });
    const [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//button[text()='Learn More']`).click()]);//Click on the "Learn More” button under Mobile Publisher
    await newPage.waitForLoadState(`domcontentloaded`);
    await newPage.waitForSelector(`//button[text()='Confirm']`, { state: "visible" });
    await newPage.locator(`//button[text()='Confirm']`).click();//Click the ‘Confirm’ button on the page
    await newPage.waitForLoadState(`domcontentloaded`);
    //Assert the title and url of the page
    await expect(newPage).toHaveTitle(expectedTitle);
    await expect(newPage).toHaveURL(expectedURL);
})