import { chromium, test } from "@playwright/test"


let expectedLastName = generateRandomLeadName();
let expectedCompanyName = generateRandomCompanyName();
test("1 Create Lead ", async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto("https://login.salesforce.com/?locale=in");
    const url = page.url()
    console.log(`The url of the page is ${url}`);
    await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
    await page.locator("#password").fill(`RaviSalesTest#1432`);
    await page.locator("#Login").click();
    await page.locator(".slds-icon-waffle").click();
    await page.locator("//button[text()='View All']").click();
    await page.locator("//p[text()='Sales']").click();
    await page.locator("a[title='Leads']").click();
    await page.locator("div[title='New']").click();
    await page.locator("button[name='salutation']").click();
    await page.locator("//*[text()='Mr.']").click();
    await page.locator("input[name='lastName']").fill(expectedLastName);
    await page.locator("input[name='Company']").fill(expectedCompanyName);
    await page.locator("button[name='SaveEdit']").click();
    // await page.locator("slot[name='primaryField']");
    let ActualLastName = await page.locator("//slot[@name='primaryField']/lightning-formatted-name").innerText();
    console.log(ActualLastName);
    let ActualCompany = await page.locator("//p[@title='Company']/following-sibling::p/slot/lightning-formatted-text").innerText();
    //await page.waitForTimeout(3000);
    console.log(ActualCompany);
    checkValues(expectedLastName, ActualLastName, expectedCompanyName, ActualCompany);
})

function checkValues(word1, word2, word3, word4) {
    let leadAddCheck = new Promise((resolve, reject) => {
        if (word2.includes(word1) && word4.includes(word3)) {
            resolve("Lead added successfully")
        } else {
            reject("Lead not added");
        }
    });
    leadAddCheck
        .then(message => {
            console.log(message);
        })
        .catch(error => {
            console.log(error);
        })
}
function generateRandomLeadName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "Lead" + result;
}
function generateRandomCompanyName() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "TestLf" + result;
}