import { test, expect } from '@playwright/test';


test('Assertion', async ({ page }) => {


    await page.goto('https://demo.nopcommerce.com/register?returnUrl=%2F');
    // verify url
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register?returnUrl=%2F')

    // verify title
    await expect(page).toHaveTitle('nopCommerce demo store. Register')

// verify element is visible or not
const logoelemnt= await page.locator('.header-logo')
await expect(logoelemnt).toBeVisible()

// verify enable or disable element
const searchbox= await page.locator('#small-searchterms')
await expect(searchbox).toBeEnabled()

//  radio button checked
const radiobutton= await page.locator('#gender-male')
await radiobutton.click();
await expect(radiobutton).toBeChecked()

//checkbox
const checkbox= await page.locator('#Newsletter')
await expect(checkbox).toBeChecked()



//  to have count ( using count for validating the value in dropdown)

const options = await page.locator("select[name='DateOfBirthDay'] option")
await expect(options).toHaveCount(32)
})