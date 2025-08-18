import { test } from "@playwright/test";
import dotenv from "dotenv"

let filename=process.env.envFile||'qa';

dotenv.config({ path: `Data/${filename}.env` })

test(`Learn to read date from env file`, async ({ page }) => {

    console.log(process.env.BaseUrl);
    console.log(process.env.LF_Username);
    console.log(process.env.LF_Password);
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(<string>process.env.BaseUrl);
    await page.fill(`#username`, <string>process.env.LF_Username);
    await page.fill(`#password`, <string>process.env.LF_Password);
    await page.click(`.decorativeSubmit`);
})