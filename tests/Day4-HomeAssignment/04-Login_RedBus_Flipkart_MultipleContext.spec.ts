//Red Bus and Flipkart in Edge and Firefox Browser Instances

import { chromium, firefox, test } from "@playwright/test";
test(`Test to launch Browser`, async () => {
    const expectedURL = "https://www.redbus.in/";
    const expectedURL1 = "https://www.flipkart.com/";
    const browser = await chromium.launch({ channel: "msedge", headless: false }) // promise is resolved only when your browser launch is completed.
    // promise is rejected it will not move to your next step and throw timeout error
    const browser1 = await firefox.launch({ channel: "firefox", headless: false })
    const context = await browser.newContext() // promise should be resolved to move to create a page
    const context1 = await browser1.newContext()
    const page = await context.newPage();
    const page1 = await context1.newPage();
    await page.goto(expectedURL);
    await page1.goto(expectedURL1);
    await page.waitForTimeout(3000);
    await page1.waitForTimeout(3000);
    const url = await page.url();
    const pageTitle = await page.title();
    const url1 = await page1.url();
    const pageTitle1 = await page1.title();
    console.log(`The url of the page is ${url}`);
    console.log(`The url of the page is ${url1}`);
    console.log(`The title of the page is ${pageTitle}`);
    console.log(`The title of the page is ${pageTitle1}`);
    verifyURL(expectedURL, url);
    verifyURL(expectedURL1, url1);

})

function verifyURL(word1, word2) {
    let leadAddCheck = new Promise((resolve, reject) => {
        if (word1 === word2) {
            resolve(`\"${word1}\" Verified`);
        } else {
            reject(`\"${word1}\" not verified`);
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