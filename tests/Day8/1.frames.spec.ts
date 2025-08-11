import { test } from "@playwright/test";

test(`Handling your frames`,async ({page}) => {
  
    await page.goto(`https://www.oneindia.com/`);

    //to get all the frames from the page

    const allframes = page.frames();// frames method is to get the compelete details of your frames from the page
  //  console.log(allframes);// [frame1,frame2,frame3,..] => frame1 is the main page which is considered as the first frame by Playwright

   const frameCount = allframes.length;

   console.log(frameCount);
   console.log(`The total count of frame in the page is ${frameCount}`);
//allframes--> 63 frames of complete data
   /* for(let tempVal of allframes){ //allframe = <div id="are-slot-leaderboard" class="oiad oi-axt oiadv" data-elementid="0" data-isroadblock="true" data-roadblocktimeout="15000" data-timeout="30" data-norefresh="0" data-isbackfill="true" data-per="100" data-refreshcount="1" data-timer="30" data-google-query-id="COvWlO77_44DFZmKrAIdzsYCtA"><div id="google_ads_iframe_/1008496/Oneindia-home-728x90_0__container__" style="border: 0pt none;"><iframe id="google_ads_iframe_/1008496/Oneindia-home-728x90_0" name="google_ads_iframe_/1008496/Oneindia-home-728x90_0" title="3rd party ad content" width="970" height="250" scrolling="no" marginwidth="0" marginheight="0" frameborder="0" aria-label="Advertisement" tabindex="0" allow="private-state-token-redemption;attribution-reporting" data-load-complete="true" style="border: 0px; vertical-align: bottom;" data-google-container-id="1" data-gtm-yt-inspected-15="true"></iframe></div></div>
    const title = await tempVal.title()
    console.log(`The title of the frames are ${title}`);
    await page.waitForTimeout(3000); */ 
    
     for(let i= 0; i < allframes.length; i++){
        const title = await allframes[i].title();
        console.log(`The title of the frames rae ${title}`);
        await page.waitForTimeout(3000)
        
    }

   
   
   


    

})