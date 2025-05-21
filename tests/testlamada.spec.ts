import test, {expect, Page} from "@playwright/test";
import ResgistartionPage from "../Pages/registrationpage";
import loginPage from "../Pages/loginpage";
import HomePage from "../Pages/Homepage";
import Specialhotpage from "../Pages/specialhotpage";
import * as data from "../data/login.cred.json";
import Env from "../uitils/environment"

test('Register Test 01', async({page}) => {
    const regiter=new ResgistartionPage(page);
   await page.goto("https://ecommerce-playground.lambdatest.io/index.php?route=account/register");

   //await page.goto(Env.test);

    await regiter.enterFirstName(data.email);
    await regiter.enterLasttName("sk111");
    await regiter.enterTelephone("919203286890");
    await regiter.enterEmail("sk334@mail7.io");
    await regiter.enterPassword(data.Password);
    await regiter.enterConfirmPassword("Amod@123456");
    await regiter.clickTermandCondition();
    await regiter.clicktoRegister();
    expect(await page.title).toBe("My Account")

    
});
