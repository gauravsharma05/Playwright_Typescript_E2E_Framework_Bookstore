import {test,expect,Locator,Page} from "@playwright/test";

export class LoginPage{

    page:Page;
    Login:Locator;
    username:Locator;
    password:Locator;
    submit:Locator;

constructor(page:Page)
{
    this.page = page;
    this.Login = page.getByTestId("goto-signin");
    this.username = page.locator("#email");
    this.password = page.locator("#password");
    this.submit =  page.locator("#submit");
}

async goToURL()
{
    await this.page.goto("https://practice.expandtesting.com/bookstore");
}

async SignIn(username:string,password:string)
{
    await this.Login.click();
    await this.username.fill(username);
    await this.password.fill(password);
    await this.submit.click();
}

}
