import { test } from "@playwright/test";
import path from "path";

test(`FileDownload`,async ({page}) => {
    page.goto(`https://leafground.com/file.xhtml`);

    const filePromise = page.waitForEvent("download");

    page.getByText(`Download`,{exact:true}).click();

    const fDown = await filePromise;
//Option1 :
   // await fDown.saveAs("Data/JulPw-2.png");
   // const fileName =fDown.suggestedFilename()
  //  await fDown.saveAs(fDown.suggestedFilename());

//Option 2 :Downloading file to Data folder using absolute path of the current file

//await fDown.saveAs(path.join(__dirname,'../../Data/PW.jpeg'));

//Option 3: Downloading file to the system folder using absolute system folder path

await fDown.saveAs("D:\\DownloadedTestleaflogo.png")

    await page.waitForTimeout(3000)
})