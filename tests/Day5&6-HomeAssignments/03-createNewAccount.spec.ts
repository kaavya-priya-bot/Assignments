import { expect, test } from "@playwright/test"

const accountName = generateRandomText(`Accname`, 7);
const pageTitle=`Lightning Experience`;
const homePageURL = `https://testleaf22-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home`;
test("Create New Account ", async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });

    await page.goto(`https://login.salesforce.com/?locale=in`);
    //console.log(await page.title());
    await page.getByLabel(`Username`).fill(`ravindran.ramdas@testleaf.com`);//Enter username using getByLabel
    await page.getByLabel(`Password`).fill(`RaviSalesTest#1432`);//Enter password using getByLabel
    await page.locator(`#Login`).click();// Click Login 
    await page.waitForLoadState(`domcontentloaded`);
    await expect(page).toHaveURL(homePageURL);//Verify the title of the page using appropriate assertions
    await expect(page).toHaveTitle(pageTitle);//Verify the url of the page using appropriate assertions
    await page.locator(`//button[@title=': Einstein Bots']`).waitFor({ state: 'visible' });
    await page.locator(`.slds-icon-waffle`).click();//Click App Launcher using the class locator
    await page.waitForLoadState(`domcontentloaded`);
    await page.getByText(`View All`, { exact: true }).click();//Click View All using getByText
    await page.waitForLoadState(`domcontentloaded`);
    await page.getByPlaceholder(`Search apps or items...`).fill(`Service`);//Enter ‘Service’ in the App Launcher Search box using getByPlaceHolder 
    await page.locator(`(//mark[text()='Service'])[1]`).click();//Click Service using index based XPath 
    await page.waitForSelector(`(//mark[text()='Service'])[1]`, { state: 'hidden' });
    await page.locator(`a[title='Accounts']`).click();// Click Accounts using attribute based CSS selector 
    await page.getByRole(`button`, { name: "New" }).click();//. Click New using getByRole 
    await page.waitForLoadState(`domcontentloaded`);
    await page.locator(`[name='Name']`).fill(accountName);// Enter Account name using attribute based CSS selector 
    await page.locator(`//button[@name='SaveEdit']`).click();//  Click Save button using XPath 
    await page.waitForSelector(`//button[@name='SaveEdit']`, { state: 'hidden' });
    const messageLocator = page.locator(`//div[contains(@class,'forceToastMessage')]`);
    await expect(messageLocator).toBeVisible();// Verify the toast message displayed 

})
function generateRandomText(prefix, length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);;
}
