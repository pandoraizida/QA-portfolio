import { test as base } from './baseFixture.ts';
import LoginPage from '../pages/LoginPage';
import { userCreds } from '../constants.ts';

export const test = base.extend<{
    loginFixture: LoginPage;
}>({

  loginFixture: [async ({ page }, use) => {
    const loginPage = new LoginPage(page);

    await loginPage.gotoLoginPage();
    await loginPage.login(userCreds.userName, userCreds.userPass);

    await page.waitForURL('/inventory.html');

    await use(loginPage);

  }, {auto: true}]

});
