import {test,expect,Locator,Page} from "@playwright/test";


export class ShoppingCartPage
{
 page:Page;
 ShoppingCart:Locator;
 Book:Locator;
 Checkout:Locator;

constructor(page:Page)
{
this.page = page;
this.ShoppingCart = page.locator(".mt-3");
this.Book = page.locator(".information");
this.Checkout = page.getByTestId("checkout");
}    

async verifyBookShoppinCart(bookName: string)
{
  // Verify that the text "Shpping Cart" appears on the page
    const shoppingCartText = await this.ShoppingCart.first().textContent();
    console.log(shoppingCartText);
    expect(shoppingCartText).toBe("Shopping Cart");

    // Verify that the correct book appears on the Shopping Cart page

    const bookText = await this.Book.first().textContent();
    console.log(bookText);
    expect(bookText).toBe(bookName);
    const bool = await this.Book.first().isVisible();
    expect(bool).toBeTruthy();

}

async clickCheckout()
{
    // Click on "Proceed To Checkout"  --------------------------------------
    await this.Checkout.click();
}
}

