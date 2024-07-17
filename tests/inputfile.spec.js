import { test, expect } from '@playwright/test';


test('handle input box', async ({ page }) => {


    await page.goto('https://www.itera.com/en/contact');

    await expect( page.locator('#firstname-d3082251-3f90-49b4-9a46-1662b6151958_556')).toBeVisible();
    await expect( page.locator('#firstname-d3082251-3f90-49b4-9a46-1662b6151958_556')).toBeEmpty();
    await expect( page.locator('#firstname-d3082251-3f90-49b4-9a46-1662b6151958_556')).toBeEditable();
    await expect( page.locator('#firstname-d3082251-3f90-49b4-9a46-1662b6151958_556')).toBeEnabled();

    await page.locator('#firstname-d3082251-3f90-49b4-9a46-1662b6151958_556').fill("varsha");
    await page.waitForTimeout(5000);


})