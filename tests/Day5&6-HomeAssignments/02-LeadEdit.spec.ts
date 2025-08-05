import { expect, test } from "@playwright/test";

const expectedCompanyName = generateRandomText("Testlf", 7);
const annualRevenue = getRandomInt();
const expectedAnnualRevenueIndollar=annualRevenue.toLocaleString('en-US', {
  style: 'currency',
  currency: 'USD'
});

const expectedDept = generateRandomText(`IT-`,7);
const expectedDesc = generateRandomText(`Updating company name, revenue and department-`,20);

test(`Edit Lead in Leaftaps`, async ({ page }) => {

    await page.setViewportSize({ width: 1500, height: 730 });

    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();//Click the Login button 

    await page.locator(`//a[contains(text(),'CRM')]`).click();//Click CRM/SFA 
    await page.locator(`//a[text()='Leads']`).click();//Click Leads 
    await page.locator(`//a[text()='Find Leads']`).click();//Click Find Leads 

    await page.getByRole(`textbox`, { name: "First name:" }).fill(`Firstnm`);//Enter the first name 
    await page.getByRole(`button`, { name: "Find Leads" }).click();//Click Find Leads button 

    await page.locator(`//span[text()='Lead List']//following::table[2]//div[contains(@class,'firstName')]/a`).click();//. Click the first resulting Lead Name
    await page.waitForTimeout(5000);
    await page.locator(`//a[text()='Edit']`).click();// Click Edit 
    await page.waitForSelector(`//a[text()='Edit']`, { state: 'hidden' });
    await page.locator(`//input[@id='updateLeadForm_companyName']`).fill(expectedCompanyName);// Edit Company name 
    await page.locator(`//input[@id='updateLeadForm_annualRevenue']`).fill(annualRevenue.toString());// Edit Annual Revenue 
    await page.locator(`//input[@id='updateLeadForm_departmentName']`).fill(expectedDept);//  Edit Department 
    await page.locator(`//textarea[@id='updateLeadForm_description']`).fill(expectedDesc);// Enter Description 
    await page.locator(`//input[@class='smallSubmit' and @value='Update']`).click();// Click Update 
    await page.waitForSelector(`//input[@class='smallSubmit' and @value='Update']`, { state: 'hidden' });
    const CompanyLocator = page.locator(`#viewLead_companyName_sp`);
    const annualRevenueLocator = page.locator(`#viewLead_annualRevenue_sp`);
    const departmentLocator = page.locator(`#viewLead_departmentName_sp`);
    const descriptionLocator = page.locator(`#viewLead_description_sp`);

    //auto-retrying assertions
    await expect(CompanyLocator).toContainText(expectedCompanyName);
    await expect(CompanyLocator).toContainText(/\s.[0-9]{5}./);
     await expect(annualRevenueLocator).toContainText(expectedAnnualRevenueIndollar);
    await expect(departmentLocator).toContainText(expectedDept);
    await expect(descriptionLocator).toContainText(expectedDesc);

    //non retrying assertions
    expect(await CompanyLocator.innerText()).toContain(expectedCompanyName);
    expect(await CompanyLocator.innerText()).toEqual(expect.stringMatching(/\s.[0-9]{5}./));
    expect(await annualRevenueLocator.innerText()).toContain(expectedAnnualRevenueIndollar);
    //expect((await annualRevenueLocator.innerText()).replace(/[$,]/g, '').replace(/.[0-9]{2}$/, '')).toContain(expectedAnnualRevenue);
    expect(await departmentLocator.innerText()).toContain(expectedDept);
    expect(await descriptionLocator.innerText()).toContain(expectedDesc);
})
function generateRandomText(prefix, length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);;
}

function getRandomInt( ) {
  // Ensure min is an integer and rounds up
   return Math.floor(Math.random() * (4500000 - 2500000) ) + 2500000;
}