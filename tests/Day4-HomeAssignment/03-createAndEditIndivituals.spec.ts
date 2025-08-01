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
        await page.locator("//button[text()='View All']").click();
        // await page.locator(":text('View All')").click();
        await page.locator("a[data-label='Individuals']").click();
        await page.waitForTimeout(3000);
        await page.locator("//a[contains(@title,'Individuals')]/following-sibling::one-app-nav-bar-item-dropdown/div/one-app-nav-bar-menu-button/a").click();
        //await page.locator("a:right-of(//a[@title='Individuals'])").click;
        //await page.waitForTimeout(3000);
        await page.locator(":text('New Individual')").click();
        //await page.waitForTimeout(3000);
        await page.locator("input[placeholder='Last Name']").fill(lastName);
        //await page.waitForTimeout(3000);
        await page.locator("button[title='Save']").click();
        //await page.waitForTimeout(3000);
        let actualLastName = await page.locator("//div[contains(text(),'Individual')]/following-sibling::div/span").innerText();
        console.log("Expected Last Name from the page: " + lastName);
        console.log("Actual Last Name fetched from the page: " + actualLastName);
        await page.waitForTimeout(3000);
        verifyLastName(lastName, actualLastName);
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
        await page.waitForLoadState("domcontentloaded");
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
        await page.waitForTimeout(4000);
        await page.locator("button[title='Save']").click();
        await page.waitForLoadState("domcontentloaded");
        await page.locator("//span[text()='Details']").click();
        //await page.waitForTimeout(6000);
        /*  await page.locator("//a[contains(@title,'"+lastName+"')]/following-sibling::one-app-nav-bar-item-dropdown/div/one-app-nav-bar-menu-button/a").click();
         await page.locator(":text('All Individuals')").click();
         await page.waitForTimeout(4000);
         await page.locator("//input[@name='Individual-search-input']").fill(lastName);
         await page.keyboard.press('Enter');
         await page.waitForTimeout(4000);
         let tableRow=await page.locator("//table[@aria-label='All Individuals']/tbody/tr").all();
         if(tableRow.length>0){
 
         }
         else{
           
         } */
        //await page.reload();
        let actualName = await page.locator("//div[text()='Individual']/following-sibling::div/span").innerText();
        console.log("Expected First Name from the page: " + firstName);
        console.log("Expected Last Name from the page: " + lastName);
        console.log("Actual Name fetched from the page: " + actualName);
        verifyNames(firstName, lastName, actualName);
    })
    function verifyNames(word1, word2, word3) {
        let verifyNamePromise = new Promise((resolve, reject) => {
            if (word3.includes(word1) && word3.includes(word2)) {
                resolve("Individual updated successfully")
            } else {
                reject("Individual not updated");
            }
        });
        verifyNamePromise
            .then(message => {
                console.log(message);
            })
            .catch(error => {
                console.log(error);
            })
    }

    function verifyLastName(word1, word2) {
        let verifyLastNamePromise = new Promise((resolve, reject) => {
            if (word2.includes(word1)) {
                resolve("Individual added successfully")
            } else {
                reject("Individual not added");
            }
        });
        verifyLastNamePromise
            .then(message => {
                console.log(message);
            })
            .catch(error => {
                console.log(error);
            })
    }
    function generateRandomLastName() {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 5; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return "Leaf" + result;
    }
    function generateRandomFirstName() {
        const characters = 'abcdefghijklmnopqrstuvwxyz';
        let result = '';
        for (let i = 0; i < 7; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return "Test" + result;
    }
});

function expect(arg0: boolean) {
    throw new Error("Function not implemented.");
}
