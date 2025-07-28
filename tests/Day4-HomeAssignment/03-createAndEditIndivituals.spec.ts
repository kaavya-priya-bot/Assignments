import { chromium, test } from "@playwright/test"

test.describe('Sequential Test Suite', () => {
    test.describe.configure({ mode: 'serial' });
    let lastName = generateRandomLastName();
    let firstName = generateRandomFirstName();

    test("3 Create Individuals", async ({ page }) => {
        //let expectedLastName = generateRandomString(7);
        await page.setViewportSize({ width: 1550, height: 800 });
        await page.goto("https://login.salesforce.com/?locale=in");
        const url = page.url()
        console.log(`The url of the page is ${url}`);
        await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
        await page.locator("#password").fill(`RaviSalesTest#1432`);
        await page.locator("#Login").click();
        await page.locator(".slds-icon-waffle").click();
        // await page.locator("//button[text()='View All']").click();
        await page.locator(":text('View All')").click();
        await page.locator("a[data-label='Individuals']").click();
        await page.waitForTimeout(3000);
        await page.locator("//a[@title='Individuals']/following-sibling::one-app-nav-bar-item-dropdown//a").click();
        //await page.locator("a:right-of(//a[@title='Individuals'])").click;
        //await page.waitForTimeout(3000);
        await page.locator(":text('New Individual')").click();
        //await page.waitForTimeout(3000);
        await page.locator("input[placeholder='Last Name']").fill(lastName);
        //await page.waitForTimeout(3000);
        await page.locator("button[title='Save']").click();
        //await page.waitForTimeout(3000);
        let ActualLastName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText();
        console.log(ActualLastName);
        await page.waitForTimeout(3000);
        verifyLastName(lastName, ActualLastName);
    })

    test("4 Edit Individuals", async ({ page }) => {
        await page.setViewportSize({ width: 1550, height: 800 });
        await page.goto("https://login.salesforce.com/?locale=in");
        const url = page.url()
        console.log(`The url of the page is ${url}`);
        await page.locator("#username").fill(`ravindran.ramdas@testleaf.com`);
        await page.locator("#password").fill(`RaviSalesTest#1432`);
        await page.locator("#Login").click();
        await page.locator(".slds-icon-waffle").click();
        await page.locator(":text('View All')").click();
        //await page.waitForTimeout(3000);
        await page.locator("a[data-label='Individuals']").click();
        //await page.waitForTimeout(3000);
        await page.locator("//input[@name='Individual-search-input']").fill(lastName);
        // await page.waitForTimeout(3000);
        await page.keyboard.press('Enter');
        await page.locator("a[title='" + lastName + "']").click();
        await page.locator("a[title='Edit']").click();
        await page.locator(":text('Salutation')");
        await page.locator("a:below(:text('Salutation'))").first().click();
        await page.locator(":text('Mr.')").click();
        await page.locator("input[placeholder='First Name']").fill(firstName);
        await page.keyboard.press('Tab');
        await page.locator("button[title='Save & New']");
        await page.locator("button[title='Save']").click();
        await page.reload();
        let ActualName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText();
        console.log(ActualName);
        verifyNames(firstName, lastName, ActualName);
    })
    function verifyNames(word1, word2, word3) {
        let leadAddCheck = new Promise((resolve, reject) => {
            if (word3.includes(word1) && word3.includes(word2)) {
                resolve("Individual updated successfully")
            } else {
                reject("Individual not updated");
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

    function verifyLastName(word1, word2) {
        let leadAddCheck = new Promise((resolve, reject) => {
            if (word2.includes(word1)) {
                resolve("Individual added successfully")
            } else {
                reject("Individual not added");
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
    function generateRandomLastName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return "Leaf" + result;
    }
    function generateRandomFirstName() {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 7; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return "Test" + result;
    }
});