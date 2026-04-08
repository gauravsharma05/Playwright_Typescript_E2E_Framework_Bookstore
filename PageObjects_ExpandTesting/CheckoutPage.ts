import {test,expect,Locator,Page} from "@playwright/test";


export class CheckoutPage
{
    page:Page;
    CheckoutText:Locator;
    name:Locator;
    address:Locator;
    cardName:Locator;
    cardNumber:Locator;
    cvc:Locator;
    cardExpiryMonth:Locator;
    cardExpiryYear:Locator;
    submitButton:Locator;

constructor(page: Page)
{
this.page = page;
this.CheckoutText = page.locator(".mt-3");
this.name = page.locator("#name");
this.address = page.locator("#address");
this.cardName =  page.locator("#card-name");
this.cardNumber = page.locator("#card-number");
this.cvc = page.locator("#card-cvc");
this.cardExpiryMonth = page.locator("#card-expiry-month");
this.cardExpiryYear = page.locator("[placeholder*='YYYY']");
this.submitButton = page.locator("[type='submit']");
}

async verifyCheckoutText()
{
 const checkoutText = await this.CheckoutText.first().textContent();
    console.log("checkout page text is:" + checkoutText);
    expect(checkoutText).toBe("Checkout");
}

async enterCardDetails(name:string,address:string,cardName:string,cardNumber:string,cvc:string,cardExpiryMonth:string,cardExpiryYear:string)
{
    await this.name.fill(name);
    await this.address.fill(address);
    await this.cardName.fill(cardName);
    await this.cardNumber.fill(cardNumber);
    await this.cvc.fill(cvc);
    await this.cardExpiryMonth.fill(cardExpiryMonth);
    await this.cardExpiryYear.fill(cardExpiryYear);

    // click on the Purchase button ------------------------------
    await this.submitButton.click();
}
}
