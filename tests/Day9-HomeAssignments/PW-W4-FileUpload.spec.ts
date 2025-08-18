import { expect, test } from "@playwright/test"
import credentials from "../../Data/loginSalesForce.json";


test(`Learn to automate the file upload process ${credentials[0].TcaseId}`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    const expectedAccountName = generateRandomText("Account", 7);
    const expectedAccCreatedToastMsg = `Account \"${expectedAccountName}\" was created.`;
    const expectedFileUploadToastMsg = `1 file was added to the Account.`;
    const fileName = `learningFileUpload`;
    await page.goto(credentials[0].URL);
    await page.locator(`#username`).fill(credentials[0].Username);//Enter username
    await page.locator(`#password`).fill(credentials[0].Password);//Enter password 
    await page.locator(`#Login`).click();//Click Login 
    await page.waitForSelector(`//button[text()='Learn More']`, { state: `visible` });
    await page.locator(`.slds-icon-waffle`).click();//Click App Launcher icon
    await page.waitForSelector(`text='App Launcher'`, { state: `visible` });
    await page.getByText(`View All`, { exact: true }).click();//Click View All
    await page.getByPlaceholder(`Search apps or items...`).fill(`Accounts`);//Enter Accounts in App Launcher search box 
    await page.click(`text='Accounts'`);//Click Accounts 
    await page.getByRole(`button`, { name: `New` }).click();//Click New 
    await page.waitForSelector(`text='New Account'`, { state: 'visible' });
    await page.locator(`//input[@name='Name']`).fill(expectedAccountName);//Enter Account Name 
    await page.getByRole(`combobox`, { name: `Rating` }).click();
    await page.click(`text=Warm`);//Select Warm from the Rating dropdown 
    await page.getByRole(`combobox`, { name: `Type` }).click();
    await page.click(`text=Prospect`);//Select Prospect from the Type dropdown 
    await page.getByRole(`combobox`, { name: `Industry` }).click();
    await page.click(`text=Banking`);//Select Banking from the Industry dropdown 
    await page.getByRole(`combobox`, { name: `Ownership` }).click();
    await page.click(`text=Public`);//Select Public from the Ownership dropdown 
    await page.click(`//button[@name='SaveEdit']`);//Click Save 
    const actualToastMsg = await page.locator(`//span[contains(@class,'toastMessage')]`).innerText();
    console.log(actualToastMsg);
    expect(actualToastMsg).toStrictEqual(expectedAccCreatedToastMsg);//Assert the Account created
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`, { state: 'hidden' });
    const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"), page.locator(`//a[@title='Upload Files']`).click()]);
    await fileUpload.setFiles("Data/learningFileUpload.txt");//Upload files
    const doneSlector = page.locator(`//span[text()='Done']`);
    await doneSlector.waitFor({ state: `attached` });
    await doneSlector.click();//Click Done
    //assert the uploaded file
    await expect(page.locator(`//span[contains(@class,'toastMessage')]`)).toHaveText(expectedFileUploadToastMsg);
    expect(await page.locator(`//div[@class='filerow']/div[2]/div[2]/span`).getAttribute(`title`)).toBe(fileName);
});
//function to generate random text
function generateRandomText(prefix: string, length: number) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);
}
