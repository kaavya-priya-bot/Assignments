import { test } from "@playwright/test";

test(`Launch different context with different pages`,async ({browser}) => {
    //context1 is a window which is holding page1 and page2
    const context1 = await browser.newContext();

    const page1 = await context1.newPage();
    await page1.goto(`https://www.flipkart.com/`);

    const page2 = await context1.newPage();
    await page2.goto(`https://www.amazon.in/`);

   // await page1.waitForTimeout(3000)
    //context2 is a window which is holding page3 and page4
    const context2 = await browser.newContext();

    const page3 = await context2.newPage();
    await page3.goto(`https://www.bigbasket.com/`);

    const page4 = await context2.newPage();
    await page4.goto(`https://www.snapdeal.com/`);

   //  await page1.waitForTimeout(3000)
})

test(`Handling tabs sequential way of handling window`,async ({context,page}) => {

    await page.goto(`https://www.flipkart.com/`);

    const searchBox= page.locator(`//input[@placeholder="Search for Products, Brands and More"]`);
    await searchBox.fill("Phones");
    await searchBox.press("Enter");

    const newPage =  context.waitForEvent('page'); // Creating a listener to listen and capture the newpage when click action performed ny your script

    await page.locator(`(//div[contains(text(),"MOTOROLA g05")])[1]`).click();

    const childPage = await newPage;

    console.log(await childPage.title());

    console.log(await page.title());  

    const price = await childPage.locator(`(//div[contains(@class,"Nx9bqj")])[1]`).innerText()
    console.log(price);

    await page.bringToFront();

    await page.locator(`//span[text()="Electronics"]`).click();
    await page.waitForTimeout(3000)
    
    
})


test.only(`Handling multiple windows in concurrent way`,async({context,page})=>{

await page.goto(`https://leafground.com/window.xhtml`);

/*  const newPage =  context.waitForEvent('page'); // Creating a listener to listen and capture the newpage when click action performed ny your script

    await page.locator(`(//div[contains(text(),"MOTOROLA g05")])[1]`).click();

    const childPage = await newPage; */

 await Promise.all([(context.waitForEvent('page'),page.getByText(`Open Multiple`,{exact:true}).click())])

/* Option2 :

const [newPage1, newPage2] = await Promise.all([(context.waitForEvent('page'),(context.waitForEvent('page'),page.getByText(`Open Multiple`,{exact:true}).click())])
Note:

1. Promise.all() waits for 2 pages to open and for the button to be clicked --> in a parallel.

2. Array Destructuring : Its's unpacking the array returned by Promise.all into individual variables (newPage1, newPage2)

*/

await page.waitForLoadState("domcontentloaded")
const allPages = context.pages();
console.log(allPages.length);

console.log(await allPages[0].title()); // parent page
console.log(await allPages[1].title()); // child page 1
console.log(await allPages[2].title()); // child page 2

for(let page of allPages){
    console.log(page.url());
    console.log(await page.title());    
    
}



})