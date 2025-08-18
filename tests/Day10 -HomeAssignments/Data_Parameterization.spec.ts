import { expect, test } from "@playwright/test";
import credentials from "../../Data/login.json";
import { parse } from "csv-parse/sync"
import fs from "fs"
import dotenv from "dotenv"

dotenv.config({ path: `Data/createLeadData.env` })
let records: any[] = parse(fs.readFileSync("Data/createLeadData.csv"), {
    columns: true,
    skip_empty_lines: true
})
test(`Create a new lead filling the mandatory fields and select the values from the dropdowns using data 
parameterization  ${credentials[0].TcaseId}`, async ({ context, page }) => {
    const source = <string>process.env.SF_Source;
    const marketingCampaign = <string>process.env.SF_MarketingCampaign;
    const industry = Number(<string>process.env.SF_Industry);
    const preferredCurrency = <string>process.env.SF_PreferredCurrency;
    const country = <string>process.env.SF_Country;
    const state = <string>process.env.SF_State;
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(credentials[0].Url);
    await page.locator(`#username`).fill(credentials[0].Username);//Enter the username
    await page.locator(`#password`).fill(credentials[0].Password);//Enter the password
    await page.locator(`.decorativeSubmit`).click();//Click the Login button
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();//Click CRM/SFA 
    await page.locator(`//a[text()='Leads']`).click();//Click Leads 
    await page.locator(`//a[text()='Create Lead']`).click();// Click Create Lead 
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill(records[0].Companyname);//Fill the Company Name 
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(records[0].Firstname);//Fill the First Name
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(records[0].Lastname);// Fill the Last Name
    await page.selectOption(`#createLeadForm_dataSourceId`, { label: `${source}` });//Select Direct Mail from the Source dropdown using label
    await page.selectOption(`#createLeadForm_marketingCampaignId`, { value: `${marketingCampaign}` });//Select Demo Marketing Campaign from the Marketing Campaign dropdown using value 
    await dropDownList(`Marketting Campaign`, `#createLeadForm_marketingCampaignId>option`);// Get the count and print all the values in the Marketing Campaign dropdown
    await page.selectOption(`#createLeadForm_industryEnumId`, { index: industry });// Select General Services from the Industry dropdown using index 
    await page.selectOption(`#createLeadForm_currencyUomId`, { label: `${preferredCurrency}` });//Select INR from the Preferred Currency dropdown 
    await page.selectOption(`#createLeadForm_generalCountryGeoId`, { label: `${country}` });// Select India from the Country dropdown 
    await page.selectOption(`#createLeadForm_generalStateProvinceGeoId`, { label: `${state}` });// Select any state from the State dropdown
    await dropDownList(`States`, `#createLeadForm_generalStateProvinceGeoId>option`);//Get the count of all states and print the values in the console
    await page.click(`.smallSubmit`);
    await page.waitForSelector(`text='View Lead'`,{state:'visible'});
    //function to get dropdown count and print values
    async function dropDownList(dropDownName:string, selectLocator:string) {
        const dropDown = page.locator(selectLocator);
        const dropDownCount = await dropDown.count();
        console.log(`No. of values in the dropdown of ${dropDownName} = ${dropDownCount}`);
        console.log(`Values in the dropdown of ${dropDownName}`);
        for (let index = 0; index < dropDownCount; index++) {
            console.log(await dropDown.nth(index).innerText());// Print all the values
        }
    }

})

