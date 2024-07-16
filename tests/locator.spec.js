import { test, expect } from '@playwright/test';


test('Locator', async ({ page }) => {


    await page.goto('https://demoblaze.com/');

    await page.locator('id=login2').click();
    // await page.click('id=login2');

    await page.locator('#loginusername').fill("pavanol");
    await page.locator('#loginpassword').fill("test@123");
     
    await page.click("button[onclick='logIn()']");
    

// verify logout link is peresent or not 
const logoutlink  = page.locator('#logout2');
await expect(logoutlink).toBeVisible();
page.close();


});