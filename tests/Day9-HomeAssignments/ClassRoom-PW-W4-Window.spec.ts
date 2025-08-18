import { expect, test } from "@playwright/test";
import credentials from "../../Data/loginSalesForce.json";

test(`Handling multiple windows in concurrent way`, async ({ context, page }) => {
    const url=credentials[0].URL;
    const userName=credentials[0].Username;
    const passWord=credentials[0].Password;
    const expectedTitle = `Service Cloud: AI-powered Customer Service Agent Console | Salesforce US`;
    const expectedURL = `https://www.salesforce.com/service/cloud/`;
    await page.goto(url);
    await page.locator(`#username`).fill(userName);//Enter username
    await page.locator(`#password`).fill(passWord);//Enter password 
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