import { expect, test } from "@playwright/test";
import data from "../../Data/dashboardData.json";
import dotenv from "dotenv"
import { title } from "process";

dotenv.config({ path: `Data/salesForceLogin.env` })
test(`Create a new dashboard and verify its name in Salesforce using Data
Parameterization and frames interaction`, async ({ context, page }) => {
    const salesForceHomePgTitle = <string>process.env.SF_HomePageTile;
    const dashBoardPageTitle = data.dashBoardPageTitle;
    const pageTitleAfterclickingSubmitInDashBoard=`Salesforce Automation by Playwright | Salesforce`;
    const url = <string>process.env.BaseUrl;
    const userName = <string>process.env.SF_Username;
    const passWord = <string>process.env.SF_Password;
    const dashBoardName = data.name;
    const dashBoardDescription = data.description;
    const expectedDashBdCreationToastMsg=data.toastMessageAfterDashboardCreation;
    await page.setViewportSize({ width: 1550, height: 800 });
    //Login to Salesforce with Credentials from .env
    await page.goto(url);
    await page.locator(`#username`).fill(userName);
    await page.locator(`#password`).fill(passWord);
    await page.locator(`#Login`).click();
    await page.waitForSelector(`.slds-icon-waffle`, { state: 'visible' });
    await expect(page).toHaveTitle(salesForceHomePgTitle);//verify successful login to the Salesforce homepage
    await page.waitForSelector(`//button[text()='Learn More']`, { state: `visible` });
    await page.locator(`.slds-icon-waffle`).click();//Click App Launcher icon
    await page.waitForSelector(`//p[text()='Salesforce Chatter']`, { state: `visible` });//The main navigation menu expands, displaying various options
    await page.getByText(`View All`, { exact: true }).click();//Click View All
    await page.waitForSelector(`//p[text()='Service']`, { state: `visible` });
    await page.getByPlaceholder(`Search apps or items...`).fill(`Dashboards`);//Enter Dashboards in App Launcher search box 
    const dashboardLinkLocator = page.locator(`text='Dashboards'`);
    await expect(dashboardLinkLocator).toBeVisible();//The Dashboards link is displayed
    await dashboardLinkLocator.click();//Click Dashboards 
    await page.waitForLoadState(`domcontentloaded`);
    await page.waitForSelector(`.forceActionLink`, { state: 'visible' });
    await expect(page).toHaveTitle(dashBoardPageTitle);//The Dashboards page is displayed, showing existing dashboards
    await page.locator(`.forceActionLink`).click();//Click on “New Dashboard”
    await page.waitForLoadState(`domcontentloaded`);
    await expect(page.locator(`//iframe[@title='dashboard']`)).toBeVisible();//A new iframe window opens for dashboard creation
    const dashBoardFrame = page.frameLocator(`//*[@title='dashboard']`);//Switch to the iframe where dashboard creation form is present
    await dashBoardFrame.locator(`text='New Dashboard'`).waitFor({ state: `visible` });
    await dashBoardFrame.locator(`#dashboardNameInput`).fill(dashBoardName);//Enter Name as Salesforce Automation by Playwright and fill other fields from JSON
    await dashBoardFrame.locator(`#dashboardDescriptionInput`).fill(dashBoardDescription);
    await dashBoardFrame.locator(`#submitBtn`).click();//Click on Create.
    await page.waitForLoadState(`domcontentloaded`);
    await dashBoardFrame.locator(`//div[@class='actions']//button[text()='Save']`).waitFor({ state: `visible` });
    await dashBoardFrame.locator(`//button[@class='slds-button doneEditing' and text()='Done']`).waitFor({ state: `visible` });
    const dashBoardNameLocatorInEditingPage=dashBoardFrame.locator(`//div[@class='dashboard-properties']/div/div/span`);
    await expect(dashBoardNameLocatorInEditingPage).toContainText(dashBoardName);//redirected to the dashboard editing page
    await expect(page).toHaveTitle(pageTitleAfterclickingSubmitInDashBoard);
    await dashBoardFrame.locator(`//div[@class='actions']//button[text()='Save']`).click();//Click on Save inside the dashboard editor
    await page.waitForSelector(`//span[contains(@class,'toastMessage')]`,{state:'visible'});
    await expect(page.locator(`//span[contains(@class,'toastMessage')]`)).toHaveText(expectedDashBdCreationToastMsg);//verify dashBoard Saved toast message 
    await page.getByRole(`link`,{name:`Dashboards`}).click();
    await page.waitForSelector(`//div[@title='New Dashboard']`,{state:'visible'});
    await expect(page).toHaveTitle(dashBoardPageTitle);//Verify that the dashboard title matches the one from dashboardData.json
    const dashBoardTopList=page.locator(`//div[@class='listViewContainer']//table/tbody/tr`).nth(0).locator('//th//a');
    await expect(dashBoardTopList).toHaveText(dashBoardName);
})