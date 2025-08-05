import { expect, test } from "@playwright/test";


const expectedCompanyName = generateRandomText("Testlf", 7);
const expectedFirstName = generateRandomText("Firstnm", 5);
const expectedLastName = generateRandomText("Last", 5);
const expectedStatus = `Assigned`;


test(`Create a Lead in Leaftaps`, async ({ page }) => {

    await page.setViewportSize({ width: 1500, height: 730 });

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();//Click the Login button 

    await page.locator(`//a[contains(text(),'CRM')]`).click();// Click CRM/SFA 

    await page.locator(`//a[text()='Create Lead']`).click();// Click Create Lead 

    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(expectedCompanyName);//Fill the Company Name 
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(expectedFirstName);//Fill the First Name
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(expectedLastName);// Fill the Last Name 
    await page.locator(`//input[@id='createLeadForm_personalTitle']`).fill(`Mr.`);// Fill the Salutation 
    await page.locator(`//input[@id='createLeadForm_generalProfTitle']`).fill(`Team Lead`);// Fill the Title 
    await page.locator(`//input[@id='createLeadForm_annualRevenue']`).fill(`2000000`);//Fill the Annual Revenue 
    await page.locator(`//input[@id='createLeadForm_departmentName']`).fill(`Revenue`);//Fill the Department 
    await page.locator(`//input[@id='createLeadForm_primaryPhoneNumber']`).fill(generateRandomPhoneNo());// Fill the Phone number
    await page.locator(`//input[@class='smallSubmit']`).click();// Click Create Lead button 
    await page.waitForSelector(`//input[@class='smallSubmit']`, { state: 'hidden' });
    const CompanyLocator = page.locator(`#viewLead_companyName_sp`);
    const firstNameLocator = page.locator(`#viewLead_firstName_sp`);
    const lastNameLocator = page.locator(`#viewLead_lastName_sp`);
    const statusLocator = page.locator(`#viewLead_statusId_sp`);

    //auto-retrying assertions
    await expect(CompanyLocator).toContainText(expectedCompanyName);
    await expect(CompanyLocator).toContainText(/\s.[0-9]{5}./);
    await expect(firstNameLocator).toContainText(expectedFirstName);
    await expect(lastNameLocator).toContainText(expectedLastName);
    await expect(statusLocator).toContainText(expectedStatus);

    //non retrying assertions
    expect(await CompanyLocator.innerText()).toContain(expectedCompanyName);
    expect(await CompanyLocator.innerText()).toEqual(expect.stringMatching(/\s.[0-9]{5}./));
    expect(await firstNameLocator.innerText()).toContain(expectedFirstName);
    expect(await lastNameLocator.innerText()).toContain(expectedLastName);
    expect(await statusLocator.innerText()).toContain(expectedStatus);


})

function generateRandomText(prefix, length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);;
}
function generateRandomPhoneNo() {
    const characters = '0123456789';
    let result = '';
    for (let i = 0; i < 9; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "9" + result;
}