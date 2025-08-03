import { chromium, test } from "@playwright/test"
test("1 Edit Lead ", async ({ page }) => {
    await page.goto(`http://leaftaps.com/opentaps/control/main`);
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    await page.locator(`#username`).fill(`democsr`);
    await page.locator(`#password`).fill(`crmsfa`);
    await page.locator(`input[value='Login']`).click();
    await page.locator(`//a[contains(text(),'CRM/SFA')]`).click();
    await page.locator(`//a[text()='Leads']`).click();
    await page.locator(`//a[text()='Create Lead']`).click();
    await page.locator(`#createLeadForm_companyName`);
    await page.locator(`#createLeadForm_companyName`).fill(generateRandomText("Testlf",7));
    await page.locator(`#createLeadForm_firstName`).fill(generateRandomText("First",5));
    await page.locator(`#createLeadForm_lastName`).fill(generateRandomText("Last",5));
    await page.locator(`input[value='Create Lead']`).click();
    await page.locator(`//a[text()='Edit']`).click();
    await page.locator(`#updateLeadForm_companyName`).fill(generateRandomText("Testlf",8));
    await page.locator(`input[value='Update']`).click();
    await page.waitForTimeout(3000);
})

function generateRandomText(prefix,length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return prefix.concat(result);;
}
