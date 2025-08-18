import { expect, test } from "@playwright/test"
import path from "path";

test.describe('Sequential Test Suite', () => {
    test.describe.configure({ mode: 'serial' });

    test(`FileUpload`, async ({ page }) => {
        page.goto(`https://the-internet.herokuapp.com/upload`);
        const uploadFile = page.locator(`(//input[@type="file"])[1]`);
        await uploadFile.setInputFiles([path.join(__dirname, '../../Data/learningFileUpload.txt')]);// Upload a document without clicking the Upload button on the page
        const [fileUpload] = await Promise.all([page.waitForEvent("filechooser"), page.locator(`#drag-drop-upload`).click()]);
        await fileUpload.setFiles("Data/Vector.png")//Upload an image inside the red square area 
        //Assert that the file has been uploaded 
        await expect(page.locator(`(//div[@id='drag-drop-upload']//span)[2]`)).toHaveText(`✔`);
        await page.locator(`#file-submit`).click();
        await expect(page.locator(`//h3`)).toHaveText(`File Uploaded!`);
    })

    test(`FileDownload`, async ({ page }) => {
        page.goto(`https://the-internet.herokuapp.com/download`);
        await page.waitForLoadState(`domcontentloaded`);
        await page.waitForSelector(`//a[text()='Elemental Selenium']`, { state: "visible" });
        const downloadLinkList = page.locator(`//*[text()='File Downloader']/following-sibling::a`);
        console.log("No of file in the page: " + await downloadLinkList.count());
        console.log(`JSON files downloaded:`);
        //Download file.json from the list of files 
        for (let index = 0; index < await downloadLinkList.count(); index++) {
            let text = (await downloadLinkList.nth(index).innerText()).toString();
            if (text.includes(`.json`)) {
                const [fDown] = await Promise.all([page.waitForEvent("download"), downloadLinkList.nth(index).click()]);
                let fileName = path.join(__dirname, "../../Data", fDown.suggestedFilename());
                console.log(fileName);
                await fDown.saveAs(fileName);
                let fs = require('fs');
                expect(fs.existsSync(fileName)).toBeTruthy();//Assert that the file has been downloaded in the required path
                const fileContent = fs.readFileSync(fileName, 'utf8');
                console.log(fileContent);//contents in the each JSON file

            }

        }
    })

});