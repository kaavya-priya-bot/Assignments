
import { expect, test } from "@playwright/test";


test(`Learn to Handle DropDown`, async ({ page }) => {



    await page.goto(`http://leaftaps.com/opentaps/control/main`);


    const url = page.url();
    const title = await page.title();


    console.log(title);

    await expect(page).toHaveTitle(title);
    await expect(page).toHaveURL(url)//it s verifying the url fetched from the page and the utl obtained from the locator is same or not


    //Generic Assetions


    //await page.locator(`//input[@id='username']`).fill(`demosalesmanager`);


    const username = page.locator(`//input[@id='username']`);
    await username.fill(`demosalesmanager`);
    // await expect(username).toHaveValue(`demosalesmanager`);


    await expect(username).toBeEditable()
    await page.locator(`//input[@id='password']`).fill(`crmsfa`);


    //Locator Assertions
    // await page.locator(`//input[@class='decorativeSubmit']`).click();
    const loginButton = page.locator(`//input[@class='decorativeSubmit']`);
    await expect(loginButton).toBeEnabled();
    await loginButton.click()





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


    await page.locator(`[name="submitButton"]`).click()


    const statusLocator = page.locator(`#viewLead_statusId_sp`);


    //Locator Assertion


    await expect(statusLocator).toBeVisible() // check if the locator is available


    const statusText = await statusLocator.innerText();


    console.log(`The status is ${statusText}`);


    await expect(statusLocator).toContainText("Assigned")








})


//Classroom:
/* 1. Choose the currency dropdown and country print the values */