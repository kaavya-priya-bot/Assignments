import { expect, test } from "@playwright/test";
import { Console } from "console";

const expectedUSACities = ['Select City', 'Denver', 'New York', 'San Francisco'];
const expectedBrazilCities = ['Select City', 'Rio de Janerio', 'Salvador', 'Sao Paulo'];
const expectedGermanyCities = ['Select City', 'Berlin', 'Frankfurt', 'Munich'];
const expectedIndianCities = ['Select City', 'Bengaluru', 'Chennai', 'Delhi'];
const countryArray=[``];
test(`Learn to verify button functionalities using assertions`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://leafground.com/select.xhtml`);
    //select option for UI
    await page.selectOption(`.ui-selectonemenu`, { label: "Selenium" });
    await page.waitForTimeout(2000);
    await page.selectOption(`.ui-selectonemenu`, { index: 3 });
    const dropDownUI = page.locator(`.ui-selectonemenu>option`);

    const dropDownCountUI = await dropDownUI.count();
    console.log(`No. of values in the dropdown for UI Automation Tool: ${dropDownCountUI}`); // 13


    for (let index = 0; index < dropDownCountUI; index++) {


        console.log(await dropDownUI.nth(index).innerText());// Print all the values

    }
    //await page.selectOption("//*[@id='j_idt87:country_input']", { index: 1 });
    const countryDropDown = await page.locator(`//label[text()='Select Country']/..`);
    await page.waitForTimeout(5000);
    await countryDropDown.click();
    const dropDownCountryList = page.locator(`//ul[contains(@id,'country_items')]/li[contains(@id,'country')]`);
    await page.waitForTimeout(5000);
    const dropDownCountryCount = await dropDownCountryList.count();
    console.log(dropDownCountryCount);
    for (let index = 1; index < dropDownCountryCount; index++) {

        countryArray.push(await dropDownCountryList.nth(index).innerText());
    }
    console.log(countryArray);
    //await countryDropDown.click();
    // await page.waitForTimeout(5000);
    for (let index = 1; index < countryArray.length; index++) {
        console.log("//li[contains(text(),'"+countryArray[index]+"')]");
        await page.locator("//li[contains(text(),'"+countryArray[index]+"')]").click();
        await page.waitForTimeout(5000);
        
        //await countryDropDown.click();
        //await dropDownCountryList.nth(index).click();
        //await countryDropDown.click();
        //const country = await dropDownCountryList.nth(index).innerText();
        //console.log(country);
        switch (countryArray[index]) {
            case `Brazil`:
                verifyStates(expectedBrazilCities);
                break;
            case `Germany`:
                verifyStates(expectedGermanyCities);
                break;
            case `India`:
                verifyStates(expectedIndianCities);
                break;
            case `USA`:
                verifyStates(expectedUSACities);
                break;
            default:
                break;
        }
       //await dropDownCountryList.nth(index).click();
       if(index!=countryArray.length-1){
      await page.locator(`//label[contains(text(),'"+countryArray[index]+"')]/..`).click();
      
       }
      
    } 
    async function verifyStates(cities) {
        const citiesDropDown = page.locator(`//*[contains(@id,'city_input')]/option`);
        const citiesDropDownCount = await citiesDropDown.count();
        for (let index = 0; index < citiesDropDownCount; index++) {
            console.log(cities[index]);
            await expect(citiesDropDown.nth(index)).toContainText(cities[index]);
        }

    }

})
