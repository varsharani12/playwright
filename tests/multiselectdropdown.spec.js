import { test, expect } from '@playwright/test';


test('handle input box', async ({ page }) => {


    await page.goto('https://testautomationpractice.blogspot.com/');
    // await page.selectOption('#colors',['Blue', 'Red', 'Green'])

    await page.waitForTimeout(5000);

    // assertion
    //  const option=  await page.locator('#colors option')
    //  await expect(await page.locator('#colors option')).toHaveCount(5);

    //  check the no of dropdown by js array
    // const option=  await page.$$('#colors option')
    // // console.log("number of options:",option.length());
    // await expect(option.length).toBe(5);
     

    //  check value presence in the dropdown

 const content= await page.locator('#colors').textContent();
 await expect(content.includes('Blue')).toBeTruthy();
    await page.waitForTimeout(5000)

})