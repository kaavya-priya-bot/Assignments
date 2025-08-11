import { expect, test } from "@playwright/test";


test(`Test to interact with the  frames, trigger alerts, and verify the displayed text based on 
actions`, async ({ page }) => {
    const expectedMessageAfterHandlingAlert=`You pressed OK!`;
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm`);
     page.on(`dialog`,async(alert)=>{
        //Get the message, type and accept the alert
        const messageReturned = alert.message();
        console.log(`The message says ${messageReturned}`);

        const typeReturned = alert.type()
        console.log(`The type of the alert is ${typeReturned}`);

         await alert.accept();

     })
    const alertFrame=await page.frameLocator(`#iframeResult`);
    await alertFrame.locator(`text=Try it`).click();//Click Try it inside the frame
    const textLocatorAfterHandlingAlert=await alertFrame.locator(`#demo`);
    // Retrieve the text “You pressed OK!” and verify it
    await expect(textLocatorAfterHandlingAlert).toContainText(expectedMessageAfterHandlingAlert);

})