import { expect, test } from "@playwright/test";

const noOfRoundedBtns=4;
const pageTitle=`Dashboard`;
test(`Learn to verify button functionalities using assertions`, async ({ page }) => {
    await page.goto(`https://leafground.com/button.xhtml`);
    await page.getByRole(`button`, { name: "Click" }).click();
    await page.waitForLoadState(`domcontentloaded`);
    await expect(page).toHaveTitle(pageTitle);// click the button and confirm a title change
    await page.goBack();
    await page.waitForLoadState(`domcontentloaded`);
    const disabledButton= page.getByRole(`button`,{name:"Disabled"});
    await expect(disabledButton).toBeDisabled();//Assert the disabled state of a button
    await page.getByRole(`button`,{name:"Image"}).click();//Click the Image button
    await page.waitForTimeout(2000);
    await page.getByRole(`button`,{name:"Image"}).click();
    const roundedButtons= await page.locator(`//button[contains(@class,'rounded-button')]`);
    const expectedNoOfRoundedButtons=await page.locator(`//button[contains(@class,'rounded-button')]`).count();
    //Auto-retrying assertion
    await expect(roundedButtons).toHaveCount(noOfRoundedBtns);
    //non-retrying aasertion
    await expect(expectedNoOfRoundedButtons).toEqual(noOfRoundedBtns);//Check how many rounded buttons are present 
    console.log(`No of rounded buttons in web page is ${expectedNoOfRoundedButtons}`);
})