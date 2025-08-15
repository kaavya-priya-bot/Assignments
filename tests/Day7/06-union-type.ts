import { Browser, BrowserContext, chromium, Page } from "playwright";

async function performAction(url:string,action:'screenshot'|'title'):Promise<string|void> {

    const browser:Browser=await chromium.launch();
    const context:BrowserContext=await browser.newContext();
    const page: Page = await context.newPage()

    await page.goto(url);

    if (action==='screenshot') {
        const screenshotPath = 'screenshot.png'
        await page.screenshot({path:screenshotPath});
        await browser.close();
        return `Screenshot saved as ${screenshotPath}`;
    }else if(action==='title'){

        const title = await page.title();
        await browser.close()
        return `The title of the page is ${title}`
    }

    await browser.close();

}

async function runTest(){
console.log(await performAction("https://www.amazon.com","screenshot"))
console.log(await performAction("https://www.amazon.com","title"))

}

runTest();