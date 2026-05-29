import { test as base } from '../fixtures/baseFixture';
import LoginPage from '../pages/LoginPage';

export const test = base.extend<{
    loginFixture: LoginPage;
}>({

  loginFixture: [async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await loginPage.userLogin();

    await use(loginPage);
   
  }, {auto: true}],

});
