const { test, expect } = require('@playwright/test');


test('Home page', async ({ page }) => {
     await page.goto('https://demoblaze.com/');

  const pageTitle =page.title();
  console.log('page title is:', pageTitle);
    // Expect a title "to contain" a substring.
    await expect(page).toHaveTitle('STORE');
      await expect(page).toHaveURL('https://demoblaze.com/');

      const pageurl =page.url();
  console.log('page url is:', pageurl);

   await  page.close();
  });
  