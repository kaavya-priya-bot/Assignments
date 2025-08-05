import { expect, test } from "@playwright/test";


test(`Learn to automate testing of checkbox functionalities using Playwright`, async ({ page }) => {
    const expectedCheckedMessage = `Checked`;
    const expectedTriStateCheckedState = `State = 1`;
    const messageLocator = await page.locator(`//span[@class='ui-growl-title']`);
    const triStateMessageLocator = await page.locator(`//span[@class='ui-growl-title']/following-sibling::p`);
    let waitForAlertToDisapper = async () => {
        await page.waitForSelector(`//span[@class='ui-growl-title']`, { state: 'hidden' });
    }
    await page.goto(`https://leafground.com/checkbox.xhtml`);
    await page.locator(`//span[text()='Basic']/preceding-sibling::div/span/..`).click();
    await page.locator(`//span[text()='Ajax']/preceding-sibling::div[contains(@class,'chkbox')]`).click();

    await expect(messageLocator, `Expected message is displayed after checking Basic and Ajax`).toContainText(expectedCheckedMessage);//Verify that the expected message is displayed.
    //await page.waitForSelector(`//span[@class='ui-growl-title']`, { state: 'hidden' });
    await waitForAlertToDisapper();

    await page.locator(`//label[text()='Javascript']/preceding-sibling::div[contains(@class,'chkbox')]`).click();
    await page.locator(`//h5[text()='Tri State Checkbox']/following::div[contains(@class,'chkbox')][1]`).click();


    await expect(triStateMessageLocator, `Expected message is displayed after checking Tristate checkbox`).toContainText(expectedTriStateCheckedState);//Verify which tri-state option has been chosen. 
    await waitForAlertToDisapper();
    await page.locator(`//div[@class='ui-toggleswitch-slider']`).click();
    await expect(messageLocator, `Expected message is displayed after clicking Toggle`).toContainText(expectedCheckedMessage);// Verify that the expected message is displayed. 
    const checkDisabledChkBxLocator = page.locator(`//div[@class='ui-chkbox-box ui-widget ui-corner-all ui-state-default ui-state-disabled ui-state-disabled']/span`);
    await expect(checkDisabledChkBxLocator).toBeHidden();//Verify if the Checkbox is disabled.
    await page.locator("//div[@class='ui-selectcheckboxmenu-trigger ui-state-default ui-corner-right']/span").click();
    await page.waitForTimeout(1000);
    const dropDown = page.locator(`.ui-selectcheckboxmenu-items-wrapper>ul>li>label`);


    const dropDownCount = await dropDown.count();


    console.log(`No. of values in the dropdown ${dropDownCount}`); // 13


    for (let index = 0; index < dropDownCount; index++) {


        console.log(await dropDown.nth(index).innerText());// Print all the 13 values

    }

    await page.locator(`//label[text()='Miami']/preceding-sibling::div`).click();
    await page.locator(`//label[text()='Istanbul']/preceding-sibling::div`).click();
    await page.locator(`//label[text()='Barcelona']/preceding-sibling::div`).click();
    await page.waitForTimeout(2000);
    await page.locator(`//a[@class='ui-selectcheckboxmenu-close ui-corner-all']`).click();
    await page.waitForTimeout(2000);
})  