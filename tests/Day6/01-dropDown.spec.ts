
import { test } from "@playwright/test";


test(`Learn to Handle DropDown`, async ({ page }) => {



    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);
    await page.locator(`//input[@class='decorativeSubmit']`).click();


    await page.locator(`//a[contains(text(),'CRM')]`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`//input[@id='createLeadForm_companyName']`).fill("Testleaf");
    await page.locator(`//input[@id='createLeadForm_firstName']`).fill(`Ravindran`);
    await page.locator(`//input[@id='createLeadForm_lastName']`).fill(`R`)

    await page.waitForTimeout(5000)
    await page.selectOption(`#createLeadForm_dataSourceId`, { value: "LEAD_DIRECTMAIL" });
    // await page.selectOption(`#createLeadForm_dataSourceId`,{label:"Direct Mail"});
    // await page.selectOption(`#createLeadForm_dataSourceId`,{index:0});



    //Get the values from the dropdown
    const dropDown = page.locator(`#createLeadForm_dataSourceId>option`);


    const dropDownCount = await dropDown.count();


    console.log(`No. of values in the dropdown ${dropDownCount}`); // 13


    for (let index = 0; index < dropDownCount; index++) {


        console.log(await dropDown.nth(index).innerText());// Print all the 13 values

    }
    await page.waitForTimeout(5000)


})