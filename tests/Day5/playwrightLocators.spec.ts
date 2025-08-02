
import { test } from "@playwright/test";


test(`Playwright Locators`,async ({page}) => {


await page.goto(`https://login.salesforce.com/?locale=in`);


await page.getByLabel("Username").fill("ravindran.ramdas@testleaf.com"); // normal DOM interaction


// await page.getByRole("textbox",{name:"Username"}).fill("ravindran.ramdas@testleaf.com") // accessibility way of interacting with the web elements


await page.getByRole("textbox",{name:"Password"}).fill("RaviSalesTest#1432")// accessibility way of interacting with the web elements


await page.getByRole("button",{name:"Log In"}).click();


await page.getByTitle("App Launcher",{exact:true}).click()


await page.getByText("View All",{exact:true}).click()


await page.getByPlaceholder("Search apps or items...",{exact:true}).fill("Service") // DOM based interacrion 



})