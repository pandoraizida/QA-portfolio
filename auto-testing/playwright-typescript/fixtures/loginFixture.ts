import { test as base } from './baseFixture.ts';
import LoginPage from '../pages/LoginPage';
import { userCreds } from '../constants.ts';

export const test = base.extend<{
    loginFixture: LoginPage;
}>({

  loginFixture: [async ({ page }, use) => {
    const loginPage = new LoginPage(page);

        const userName = userCreds.userName;
        const userPass = userCreds.userPass;

        await loginPage.gotoLoginPage();
        await loginPage.userName.fill(userName);
        await loginPage.userPassword.fill(userPass);
        await loginPage.loginButton.click();

        await page.waitForURL('/inventory.html');

    await use(loginPage);
   
  }, {auto: true}]

});
