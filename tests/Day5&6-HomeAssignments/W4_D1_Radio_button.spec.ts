import { expect, test, } from "@playwright/test";

test(`Learn to verify radio functionalities using assertions`, async ({ page }) => {
  await page.setViewportSize({ width: 1550, height: 800 });
  await page.goto(`https://leafground.com/radio.xhtml`);
  const defaultSelectRadioBtnList = page.locator(`//h5[text()='Find the default select radio button']/following-sibling::div//td/div/div[2]`);


  for (let index = 0; index < await defaultSelectRadioBtnList.count(); index++) {
    const divAttributeValue = await defaultSelectRadioBtnList.nth(index).getAttribute(`class`);
    if (divAttributeValue?.includes(`state-active`)) {
      const labelLocator = defaultSelectRadioBtnList.nth(index).locator(`//../following-sibling::label`);
      console.log(`One of the Radio button is in Active State`);
      await expect(labelLocator).toContainText(`Safari`);//Identify and assert the default selected radio button.
    }

  }
  const chromeRadioBtn = page.locator(`(//label[text()='Chrome']/preceding-sibling::div/div[2])[1]`);
  await chromeRadioBtn.click();
  await page.keyboard.press('Tab');
  expect(await chromeRadioBtn.getAttribute(`class`)).toContain(`state-active`);//Click your most favorite browser and assert that the browser is enabled.
  const chennaiRadioBtn = page.locator(`//label[text()='Chennai']/preceding-sibling::div/div[2]`);
  await chennaiRadioBtn.click();// Click one of the cities. 
  await page.keyboard.press('Tab');
  expect(await chennaiRadioBtn.getAttribute(`class`)).toContain(`state-active`);
  const ageGrpRadioBtnList = page.locator(`//h5[text()='Select the age group (only if not selected)']/following-sibling::div//label/preceding-sibling::div/div[2]`);


  for (let index = 0; index < await ageGrpRadioBtnList.count(); index++) {
    const divAttributeValue = await ageGrpRadioBtnList.nth(index).getAttribute(`class`);
    if (divAttributeValue?.includes(`state-active`)) {
      expect(await ageGrpRadioBtnList.nth(index).getAttribute(`class`)).toContain(`state-active`);// Select the age group. Assert the default selected button.
      console.log(`one of Radio Button in Age Group is selected already....`);
    }
  }
})

