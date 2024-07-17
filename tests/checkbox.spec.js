const { test, expect } = require('@playwright/test');


test('checkbox', async ({ page }) => {
     await page.goto('https://testautomationpractice.blogspot.com/');

     //single checkbox
     await page.locator("//input[@type='checkbox' and @id='sunday']").check();
     expect(await page.locator("//input[@type='checkbox' and @id='sunday']")).toBeChecked();
     expect(await page.locator("//input[@type='checkbox' and @id='sunday']").isChecked()).toBeTruthy();
     expect(await page.locator("//input[@type='checkbox' and @id='monday']").isChecked()).toBeFalsy();


    //  multiple checkbox
    const checkboxlocator =["//input[@type='checkbox' and @id='sunday']","//input[@type='checkbox' and @id='monday']","//input[@type='checkbox' and @id='wednesday']"

    ];
    for( const locator of checkboxlocator){
        await page.locator(locator).check();//select multiple checkbox
    }

    for( const locator of checkboxlocator){
        
        if( await page.locator(locator).isChecked){
        await page.locator(locator).uncheck();// unselect multiple checkbox which are selected
    }
}

    


     await page.waitForTimeout(5000);






})