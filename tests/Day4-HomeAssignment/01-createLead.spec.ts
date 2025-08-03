import { chromium, test } from "@playwright/test"


const expectedLastName = generateRandomText("Lead",5);
const expectedCompanyName = generateRandomText("Testlf",7);
test("1 Create Lead ", async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://login.salesforce.com/?locale=in`);
    const url = page.url()
    console.log(`The url of the page is ${url}`);
    await page.locator(`#username`).fill(`ravindran.ramdas@testleaf.com`);
    await page.locator(`#password`).fill(`RaviSalesTest#1432`);
    await page.locator(`#Login`).click();
    await page.locator(`.slds-icon-waffle`).click();
    await page.getByText(`View All`,{exact:true}).click();
    await page.locator(`//p[text()='Sales']`).click();
    await page.locator(`a[title='Leads']`).click();
    await page.locator(`div[title='New']`).click();
    await page.locator(`button[name='salutation']`).click();
    await page.getByText(`Mr.`,{exact:true}).click();
    await page.locator(`input[name='lastName']`).fill(expectedLastName);
    await page.locator(`input[name='Company']`).fill(expectedCompanyName);
    await page.locator(`button[name='SaveEdit']`).click();
    const actualLastName = await page.locator(`lightning-formatted-name:below(:text('Lead'))`).innerText();
    console.log(`ExpectedLastName: ${expectedLastName}`);
    console.log(`ActualLastName: ${actualLastName}`);
    const actualCompany = await page.locator(`//p[@title='Company']/following-sibling::p/slot/lightning-formatted-text`).innerText();
    console.log(`ExpectedCompanyName: ${expectedCompanyName}`);
    console.log(`ActualCompany:  ${actualCompany}`);
    checkIfLeadAdded(expectedLastName, actualLastName, expectedCompanyName, actualCompany);
})

function checkIfLeadAdded(word1, word2, word3, word4) {
    let leadAddCheck = new Promise((resolve, reject) => {
        if (word2.includes(word1) && word4.includes(word3)) {
            resolve(`Lead added successfully`)
        } else {
            reject(`Lead not added`);
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
function generateRandomText(prefix,length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);
}
