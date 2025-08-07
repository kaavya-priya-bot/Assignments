import { expect, test, } from "@playwright/test";

test(`Learn to implement Playwright's auto-waiting features for handling dynamic content efficiently. `, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://leafground.com/waits.xhtml`);
    await page.getByRole(`button`, { name: "Click" }).nth(0).click();
    const visibilityBtn = await page.getByRole(`button`, { name: "I am here" });
    await visibilityBtn.waitFor({ state: 'visible' });//Wait for an element to become visible before interacting with it.
    await expect(visibilityBtn).toBeVisible();
    await page.getByRole(`button`, { name: "Click" }).nth(1).click();
    const inVisibilityBtn = await page.getByRole(`button`, { name: "I am about to hide" });
    await inVisibilityBtn.waitFor({ state: 'hidden' });//Wait for an element to disappear from the page. 
    await expect(inVisibilityBtn).toBeHidden();
    // let clickableBtn = await page.locator(`//span[text()='Click Second']/..`);
    //await clickableBtn.focus(); 

    await page.getByRole(`button`, { name: "Click First Button" }).click();
    await page.getByRole(`alert`).nth(0).waitFor({ state: 'visible' });
    await page.getByRole(`alert`).nth(1).waitFor({ state: 'visible' });
    await page.getByRole(`alert`).nth(2).waitFor({ state: 'visible' });
    //await page.click(`//span[text()='Click Second']/..`);
    // await clickableBtn.press('Enter') ;
    //await expect(clickableBtn).toBeAttached();
    /* clickableBtn = await page.locator(`//span[text()='Click Second']/..`);
    await clickableBtn.click();
     await page.keyboard.down(`Enter`);
     divAttributeValue= await clickableBtn.getAttribute(`class`);
       if(await divAttributeValue?.toString().includes(`state-active`)){
        console.log("button active");
       }
       else{
        console.log(`Button not active`);
       }
       await page.keyboard.up(`Enter`); */

    /* if (await isElementClickable(page, clickableBtn)) {
        console.log("Button is clickable!");
    } else {
        console.log("Button is not clickable. Maybe something is blocking it.");
    }
    await expect(await isElementClickable(page, clickableBtn)).toBeFalsy(); */
    await page.getByRole(`alert`).nth(0).waitFor({ state: 'hidden' });
    await page.getByRole(`alert`).nth(1).waitFor({ state: 'hidden' });
    await page.getByRole(`alert`).nth(2).waitFor({ state: 'hidden' });
    await page.getByRole(`button`, { name: "Click" }).nth(4).click();
    const beforChangeBtn = await page.getByRole(`button`, { name: "I am going to change!" });
    await beforChangeBtn.waitFor({ state: 'hidden' });//Check for text changes within an element and respond accordingly. 
    await expect(beforChangeBtn).toBeHidden();
    const afterChangeBtn = await page.getByRole(`button`, { name: "Did you notice?" });
    await afterChangeBtn.waitFor({ state: 'visible' });
    await expect(afterChangeBtn).toBeVisible();

    /*  async function isElementClickable(page, locator) {
         const element = await locator.elementHandle();
         return await page.evaluate((el) => {
             const rect = el.getBoundingClientRect();
             const x = rect.left + rect.width / 2;
             const y = rect.top + rect.height / 2;
             const elementAtPoint = document.elementFromPoint(x, y);
             return el === elementAtPoint;
         }, element);
     } */
});