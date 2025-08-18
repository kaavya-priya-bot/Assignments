import { test } from "@playwright/test";
import { parse } from "csv-parse/sync"
import fs from "fs"

let records: any[] = parse(fs.readFileSync("Data/login.csv"), {
    columns: true,
    skip_empty_lines: true
})
for (let data of records) {
    test(`Learn to read date from CSV ${data.tcid}`, async ({ page }) => {
        await page.setViewportSize({ width: 1550, height: 800 });
        await page.goto(`http://leaftaps.com/opentaps/control/main`);
        await page.locator(`#username`).fill(data.username);
        await page.locator(`#password`).fill(data.password);
        await page.locator(`.decorativeSubmit`).click();
    });
}

/* [
{
tcid:1
username:demoCSR,
password:crmsfa
},
{
tcid:2
username:demoSalesManager,
password:crmsfa
}
] */