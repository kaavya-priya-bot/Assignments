import { test } from "@playwright/test";
import { parse } from "csv-parse/sync"
import fs from "fs"

let records: any[] = parse(fs.readFileSync("Data/loginSalesForce.csv"), {
    columns: true,
    skip_empty_lines: true
})
for (let data of records) {
    test(`Learn to read date from CSV ${data.tcid}`, async ({ page }) => {
        await page.setViewportSize({ width: 1550, height: 800 });
        await page.goto(`https://login.salesforce.com/?locale=in`);
        await page.locator(`#username`).fill(data.username);
        await page.locator(`#password`).fill(data.password);
        await page.locator(`#Login`).click();
    });
}