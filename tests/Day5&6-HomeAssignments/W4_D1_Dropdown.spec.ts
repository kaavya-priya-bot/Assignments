import { expect, test } from "@playwright/test";
import { Console } from "console";

const expectedUSACities = ['Select City', 'Denver', 'New York', 'San Francisco'];
const expectedBrazilCities = ['Select City', 'Rio de Janerio', 'Salvador', 'Sao Paulo'];
const expectedGermanyCities = ['Select City', 'Berlin', 'Frankfurt', 'Munich'];
const expectedIndianCities = ['Select City', 'Bengaluru', 'Chennai', 'Delhi'];
const countryArray = [``];
test(`Learn to verify button functionalities using assertions`, async ({ page }) => {
    await page.setViewportSize({ width: 1550, height: 800 });
    await page.goto(`https://leafground.com/select.xhtml`);
    //select option for UI
    await page.selectOption(`.ui-selectonemenu`, { label: "Selenium" });
    await page.waitForTimeout(2000);
    await page.selectOption(`.ui-selectonemenu`, { index: 3 });
    const dropDownUI = page.locator(`.ui-selectonemenu>option`);

    const dropDownCountUI = await dropDownUI.count();
    console.log(`No. of values in the dropdown for UI Automation Tool: ${dropDownCountUI}`); 
    console.log(`*********Automation Tools List*********`);

    for (let index = 0; index < dropDownCountUI; index++) {


        console.log(await dropDownUI.nth(index).innerText());// Print all the values

    }
    const countryDropDown = await page.locator(`//label[text()='Select Country']/..`);
    //await page.waitForTimeout(5000);
    await countryDropDown.click();
    const dropDownCountryList = page.locator(`//ul[contains(@id,'country_items')]/li[contains(@id,'country')]`);
    const dropDownCountryCount = await dropDownCountryList.count();
    console.log(`Total no  of values in the countries dropdown : ${dropDownCountryCount}`);
    for (let index = 1; index < dropDownCountryCount; index++) {

        countryArray.push(await dropDownCountryList.nth(index).innerText());
    }
    console.log(`Countries: ${countryArray}`);
    for (let index = 1; index < countryArray.length; index++) {
        await page.locator("//li[contains(text(),'" + countryArray[index] + "')]").click();
        await page.waitForSelector("//label[text()='" + countryArray[index] + "']/..", { state: 'visible' });
        console.log(`Country selected: ${countryArray[index]}`);
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
        if (index != countryArray.length - 1) {
            await page.waitForSelector("//label[text()='" + countryArray[index] + "']/..",{state:`visible`});
            await page.locator("//label[text()='" + countryArray[index] + "']/..").click();
        }

    }
   
    await chooseCourse(`Appium`);
    await chooseCourse(`Selenium WebDriver`);
    await chooseCourse(`RestAssured`);
    //await page.waitForTimeout(3000);
    await page.locator(`//h5[text()='Choose language randomly']/following-sibling::div`).click();
    const languageList= await page.locator(`//ul[contains(@id,'lang_items')]/li`);
    const languageListCount=await languageList.count();
    console.log(`************Language List**********`);
    for(let index=1;index<languageListCount; index++){
        let language=await languageList.nth(index).innerText();
        console.log(language);
        await page.locator("//li[contains(text(),'" + language + "')]").click();
        await page.locator(`//h5[contains(text(),"Select 'Two' irrespective of the language chosen")]/following-sibling::div`).click();
       switch (language) {
        case `English`:
            await page.locator(`//li[text()='Two']`).click();
            break;
        case `Tamil`:
            await page.locator(`//li[text()='இரண்டு']`).click();
            break;
        case `Telugu`:
            await page.locator(`//li[text()='రెండు']`).click();
            break;
        case `Kannada`:
            await page.locator(`//li[text()='ಎರಡು']`).click();
            break;
        case `Malayalam`:
            await page.locator(`//li[text()='രണ്ട്']`).click();
            break;
       
        default:
            break;
       }
        if (index != languageListCount - 1) {
            await page.locator("//label[text()='" +  language  + "']/..").click();
        }


    }
    async function chooseCourse(course:string){
    await page.waitForSelector(`//h5[text()='Choose the Course']/following-sibling::div/button`,{state:`visible`});
    await page.getByRole(`button`,{name:"Show Options"}).click();
    await page.locator(`//li[contains(text(),'`+course+`')]`).click();
    }
    async function verifyStates(cities) {
        const citiesDropDown = page.locator(`//*[contains(@id,'city_input')]/option`);
        const citiesDropDownCount = await citiesDropDown.count();
        console.log(`*************Cities**************`);
        for (let index = 0; index < citiesDropDownCount; index++) {
            console.log(cities[index]);
            await expect(citiesDropDown.nth(index)).toContainText(cities[index]);
        }

    }

})
