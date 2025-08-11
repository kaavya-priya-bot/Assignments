
/* import { test } from "@playwright/test";


test(`Test to Handle alerts`,async({page})=>{


await page.goto(`https://leafground.com/alert.xhtml`);


await page.locator(`text=Show`).first().click()
await page.waitForTimeout(3000);


await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator(`//span[text()='Show']`).click();
await page.waitForTimeout(3000)


await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator(`//span[text()='Show']`).click();
await page.waitForTimeout(3000)
})
*/


import { test } from "@playwright/test"


test(`Test to Handle alerts using page.on`,async({page})=>{


await page.goto(`https://leafground.com/alert.xhtml`);


page.on(`dialog`,async(alert)=>{
/* Notes of internal working:
1. First trigger (Simple alert button clicked)--> "alert" hold the values present in your simple alert 
2. Second trigger (Confirm alert button click)--> "alert" hold the values present in your confirm dialog 
3. Third trigger (Prompt alert button click)--> "alert" hold the values present in your prompt dialog */


const messageReturned = alert.message();
console.log(`The message says ${messageReturned}`);


const typeReturned = alert.type()
console.log(`The type of the alert is ${typeReturned}`);


if(typeReturned==='confirm'){
await alert.accept();
}else if (typeReturned==='prompt'){
await alert.accept("Testleaf")
}else
await alert.dismiss() 

})


await page.locator(`text=Show`).first().click()
await page.waitForTimeout(3000);


await page.locator(".card").filter({hasText:"Confirm Dialog"}).locator(`//span[text()='Show']`).click();
await page.waitForTimeout(3000)


await page.locator(".card").filter({hasText:"Prompt Dialog"}).locator(`//span[text()='Show']`).click();
await page.waitForTimeout(3000)
})