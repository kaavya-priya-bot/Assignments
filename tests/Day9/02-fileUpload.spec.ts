import{test} from "@playwright/test"
import path from "path";

test(`FileUpload with type=file`,async ({page}) => {

    page.goto(`https://leafground.com/file.xhtml`);

    const uploadFile = page.locator(`(//input[@type="file"])[1]`);

//OPtion 1 : Uploading filer from Data folder
  //  await uploadFile.setInputFiles("Data/learningFileUpload.txt");

    //Option2 : Uploading file from Data folder using absolute path of the current file

    await uploadFile.setInputFiles([path.join(__dirname,'../../Data/learningFileUpload.txt')])
    //Option 3:

   /*  const filepath = "D:\\OOPS notes.txt"

    await uploadFile.setInputFiles(filepath); */

    await page.waitForTimeout(3000)
    
})

test(`Multiple FileUpload`,async ({page}) => {

    await page.goto(`https://leafground.com/file.xhtml`);

    const MultipleUpload = page.locator(`(//input[@type="file"])[2]`)

    await MultipleUpload.setInputFiles(["Data/qeagle-logo.png","Data/TestleafLogo.png"])

    await page.waitForTimeout(3000)
    
})


test.only(`FileUpload with no type=file attribute`,async ({page}) => {

    await page.goto(`https://the-internet.herokuapp.com/upload`);

    const filePromise = page.waitForEvent("filechooser")

    page.locator(`#drag-drop-upload`).click();

    const fileUpload = await filePromise;

   await fileUpload.setFiles("Data/qeagle-logo.png")

   await page.waitForTimeout(3000)



     







    await page.waitForTimeout(3000)
    
})