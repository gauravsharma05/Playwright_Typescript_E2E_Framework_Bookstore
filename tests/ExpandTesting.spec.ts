import {test,expect,Locator,Page} from "@playwright/test";
// Import the Page classes from the Page Objects ----------------------------------
import { LoginPage } from "../PageObjects_ExpandTesting/LoginPage";
import { ProfilePage } from "../PageObjects_ExpandTesting/ProfilePage";
import { BookStorePage } from "../PageObjects_ExpandTesting/BookStorePage";
import { ShoppingCartPage } from "../PageObjects_ExpandTesting/ShoppingCartPage";
import { CheckoutPage } from "../PageObjects_ExpandTesting/CheckoutPage";
import {OrdersPage} from "../PageObjects_ExpandTesting/OrdersPage";

// get the test dataset from the JSON in Utils --------------------------------------
import dataSet from "../Utils/ExpandTesting_TestData.json";


test('Expand testing Test', async ({ page }) => {
    // Login to the Bookstore via the UI ------- 
    //Create a LoginPage object and login via the methods of that class--
    const loginPage = new LoginPage(page);
    await loginPage.goToURL();
    await loginPage.SignIn(dataSet.username, dataSet.password);

    //Create a ProfilePage object and call the methods of that class---
    // Verify the Profile text on the Landing page
    const profilePage = new ProfilePage(page);
    await profilePage.verifyProfile();
    await profilePage.clickAllBooks();

    // Create an object of the BookStorePage class and click on "Add To Cart" for a particular book--
    const bookStorePage = new BookStorePage(page);
    await bookStorePage.AddTheBookToCart(dataSet.bookName);
    await bookStorePage.clickOnCart();

    // Create an object of the ShoppingCartPage class and verify the book on the shopping cart and click on Checkout
    const shoppingCartPage = new ShoppingCartPage(page);
    await shoppingCartPage.verifyBookShoppinCart(dataSet.bookName);
    await shoppingCartPage.clickCheckout();

    // Create an Object of the CheckoutPage class and enter the credit card details on the page and click on "Purchase" button
    const checkoutPage = new CheckoutPage(page);
    await checkoutPage.verifyCheckoutText();
    await checkoutPage.enterCardDetails(dataSet.yourName, dataSet.Address, dataSet.cardName, dataSet.cardNumber, dataSet.cvc, dataSet.cardExpiryMonth, dataSet.cardExpiryYear);
    
    //Create an OrdersPage class object and verify the OrderID and click on the Delete button --
    const ordersPage = new OrdersPage(page);
    await ordersPage.confirmOrder();
    await ordersPage.deleteAllOrders();
});