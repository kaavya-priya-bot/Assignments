import { expect, test } from "@playwright/test";
import credentials from "../../Data/login.json";

test(`To merge the leads created  ${credentials[0].TcaseId}`, async ({ context, page }) => {
    const expectedPageTitleAfterMerge = `View Lead | opentaps CRM`;
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(credentials[0].Url);
    await page.locator(`#username`).fill(credentials[0].Username);//Enter the username
    await page.locator(`#password`).fill(credentials[0].Password);//Enter the password
    await page.locator(`.decorativeSubmit`).click();//Click the Login button
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();//Click CRM/SFA 
    await page.locator(`//a[text()='Leads']`).click();//Click Leads 
    await page.getByRole(`link`, { name: `Merge Leads` }).click();//Click Merge Leads 
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    let [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='From Lead']/../following-sibling::td/a`).click()]);//Click From Lead widget 
    await newPage.waitForSelector(`text='Find Leads'`, { state: 'visible' });
    await newPage.locator(`(//table[@class='x-grid3-row-table'])[1]/tbody/tr[1]/td[1]//a`).click();//Select the first resulting lead id 
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    [newPage] = await Promise.all([context.waitForEvent('page'), page.locator(`//*[text()='To Lead']/../following-sibling::td/a`).click()]);//Click To Lead widget 
    await newPage.waitForSelector(`text='Find Leads'`, { state: 'visible' });
    await newPage.locator(`(//table[@class='x-grid3-row-table'])[2]/tbody/tr[1]/td[1]//a`).click();//Select the second resulting lead id
    await page.waitForSelector(`//a[text()='Merge']`, { state: `visible` });
    await Promise.all([page.once(`dialog`, async (alert) => {
        //Get the message, type and accept the alert
        console.log(`**********Alert Message And Type***********`);
        const messageReturned = alert.message();
        console.log(`The message says ${messageReturned}`);
        const typeReturned = alert.type()
        console.log(`The type of the alert is ${typeReturned}`);
        await alert.accept();//Accept the alert 
    }),
    await page.click(`//a[text()='Merge']`)]);//Click Merge button
    await page.waitForSelector(`text='View Lead'`, { state: 'visible' });
    await expect(page).toHaveTitle(expectedPageTitleAfterMerge);//Assert the title of the page 

});