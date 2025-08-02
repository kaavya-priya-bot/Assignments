import {test}  from "@playwright/test";

/* test('CSS Handling',async({page})=>{
    await page.goto("http://leaftaps.com/opentaps/control/main");
    const url = page.url();
    console.log(`The url of the page is ${url}`);
    await page.locator(".inputLogin").first().fill(`democsr`);//USERNAME- first method
    await page.locator(".inputLogin").nth(1).fill(`crmsfa`);//PASSWORD- nth method
    await page.locator(".decorativeSubmit").click();
    await page.locator("text='CRM/SFA'").click();
    await page.waitForTimeout(2000);

}); */

test(`CSS handling`,async({page})=>{

await page.goto(`http://leaftaps.com/opentaps/control/main`);

//await page.locator("#username").fill(`democsr`);

//await page.locator(`.inputLogin`).nth(0).fill(`demosalesmanager`); // username using nth method

await page.locator(`.inputLogin`).first().fill(`demosalesmanager`); // username using first method

await page.locator(`.inputLogin`).nth(1).fill(`crmsfa`); // password

await page.locator(`.decorativeSubmit`).click();

await page.locator(`text="CRM/SFA"`).click();

await page.waitForTimeout(3000)

})