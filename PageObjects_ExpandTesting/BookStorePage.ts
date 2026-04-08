import {test,expect,Locator,Page} from "@playwright/test";

export class BookStorePage
{
page:Page;
products: Locator;
title: Locator;
cart: Locator;

constructor(page: Page)
{
this.page = page;
this.products = page.locator(".card-product-user");
this.title = page.locator(".card-title");
this.cart = page.locator("a[href='/bookstore/cart']");

}  

async AddTheBookToCart(bookName: string)
{
 await this.products.first().waitFor();

    // Get all the book titles present on the page in one variable
    const allTitles = await this.title.allTextContents();
    console.log(allTitles);

    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
        let text: any;
        text = await this.products.nth(i).locator(".card-title").textContent();
        console.log(text);
        if (text.trim() === bookName) {
            // click on Add to Cart for the desired item --------------
            await this.products.nth(i).locator("text=Add To Cart").click();
            break;
        }
    }

}
async clickOnCart()
{
    await this.cart.click();
}
}
