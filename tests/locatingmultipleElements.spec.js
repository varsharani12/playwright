import { test, expect } from '@playwright/test';


test('Multiple Elements', async ({ page }) => {

    await page.goto('https://demoblaze.com/');

    // const links =  await page.$$('a');

    // for(const link of links){

    //     const linktext = await link.textContent();
    //     console.log(linktext);
    // }
    // page.close();

 
// printing all the list of product
const products = await page.$$("//div[@id='tbodyid']//h4//a");

for(const product  of products){

        const productname = await product.textContent();
        console.log(productname);
    }
page.close();
})