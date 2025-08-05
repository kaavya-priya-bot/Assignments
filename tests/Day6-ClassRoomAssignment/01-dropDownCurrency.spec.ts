import { test } from "@playwright/test";


test(`Learn to Handle DropDown for currency and country`, async ({ page }) => {



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
    await page.selectOption(`#createLeadForm_currencyUomId`, { label: "ALL - Albanian Lek" });

    const dropDown1 = page.locator(`#createLeadForm_currencyUomId>option`);


    const dropDownCount1 = await dropDown1.count();


    console.log(`No. of values in the dropdown ${dropDownCount1}`); // 13


    for (let index = 0; index < dropDownCount1; index++) {


        console.log(await dropDown1.nth(index).innerText());// Print all the 13 values

    }
    await page.waitForTimeout(5000)

    await page.selectOption(`#createLeadForm_generalCountryGeoId`, { index: 3 });




    //Get the values from the Country dropdown
    const dropDown2 = page.locator(`#createLeadForm_generalCountryGeoId>option`);


    const dropDownCount2 = await dropDown2.count();


    console.log(`No. of values in the dropdown ${dropDownCount2}`); // 13


    for (let index = 0; index < dropDownCount2; index++) {


        console.log(await dropDown2.nth(index).innerText());// Print all the 13 values

    }
    await page.waitForTimeout(5000)



})