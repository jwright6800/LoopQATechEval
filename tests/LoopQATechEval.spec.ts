import { test, expect } from '@playwright/test'

var testCases = [
    {
      testCase : 'Test case 1',
      application : 'Web application',
      column : 'To Do',
      ticketTitle : 'Implement user authentication',
      tags : ['Feature', 'High Priority']
    },
    {
      testCase : 'Test case 2',
      application : 'Web application',
      column : 'To Do',
      ticketTitle : 'Fix navigation bug',
      tags : ['Bug']
    },
    {
      testCase : 'Test case 3',
      application : 'Web application',
      column : 'In Progress',
      ticketTitle : 'Design system updates',
      tags : ['Design']
    },
    {
      testCase : 'Test case 4',
      application : 'Mobile application',
      column : 'To Do',
      ticketTitle : 'Push notification system',
      tags : ['Feature']
    },
    {
      testCase : 'Test case 5',
      application : 'Mobile application',
      column : 'In Progress',
      ticketTitle : 'Offline mode',
      tags : ['Feature', 'High Priority']
    },
    {
      testCase : 'Test case 6',
      application : 'Mobile application',
      column : 'Done',
      ticketTitle : 'App icon design ',
      tags : ['Design']
    }
  ].forEach(({ testCase, application, column, ticketTitle, tags }) => {
  
    test(`${testCase}`, async ({ page }) => {
      
      //navigate and login
      await page.goto(process.env.BASE_URL);
      await page.getByRole('textbox', { name: 'Username' }).fill(process.env.USERNAME);
      await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASSWORD);
      await page.getByRole('button', { name: 'Sign in' }).click();

      //choose application board
      await page.getByRole('button', { name: application }).click();
    
      //check column
      await expect(page.getByText(column)).toContainText(column);

      //check ticket title
      await expect(page.locator(`.flex-col`, {hasText: column}).locator('h3', {hasText: ticketTitle})).toContainText(ticketTitle);

      //check tags
      for(var index in tags) {
          await expect(page.locator(`.flex-col`, {hasText: column})
          .locator('.bg-white', {hasText: ticketTitle})
          .locator(`.flex-wrap`)).toContainText(tags[index]);
      };
    
  }); 
});