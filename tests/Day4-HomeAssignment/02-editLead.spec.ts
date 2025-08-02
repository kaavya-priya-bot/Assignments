import { chromium, test } from "@playwright/test"
test("1 Edit Lead ", async ({ page }) => {
    // await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    await page.locator("#username").fill(`democsr`);
    await page.locator("#password").fill(`crmsfa`);
    await page.locator("input[value='Login']").click();
    //await page.locator("img[src='/opentaps_images/integratingweb/crm.png']");
    await page.locator("//a[contains(text(),'CRM/SFA')]").click();
    //await page.locator("div.crmsfa a:first-child ").click();
    //await page.getByText('Leads').click();
    //await page.locator(":text('Leads')").click();
    await page.locator("//a[text()='Leads']").click();
    //await page.getByText(":text('Create Lead')").click();
    await page.locator("//a[text()='Create Lead']").click();
    await page.locator("#createLeadForm_companyName");
    await page.locator("#createLeadForm_companyName").fill(generateRandomCompanyName());
    await page.locator("#createLeadForm_firstName").fill(generateRandomFirstName());
    await page.locator("#createLeadForm_lastName").fill(generateRandomLastName());
    await page.locator("input[value='Create Lead']").click();
    //await page.waitForTimeout(3000);
    //await page.locator("//a[text()='Edit']");
    await page.locator("//a[text()='Edit']").click();
    await page.locator("#updateLeadForm_companyName").fill(generateRandomCompanyName());
    await page.locator("input[value='Update']")
    await page.locator("input[value='Update']").click();
    await page.waitForTimeout(3000);
})
function generateRandomCompanyName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 7; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "Testlf" + result;
}

function generateRandomFirstName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "First" + result;
}
function generateRandomLastName() {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < 5; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return "Last" + result;
}