import {test,expect,Locator,Page} from "@playwright/test";

export class OrdersPage 
{
    page:Page;
    orderLocator:Locator;
    Order:Locator;
    deleteButton:Locator;

    constructor(page: Page) {
        this.page = page;
        this.orderLocator = page.locator("#flash");
        this.Order = page.locator(".card");
        this.deleteButton = page.locator('#deleteOrdersBtn');
    }

    async confirmOrder() {
        let orderText:any;
        orderText = await this.orderLocator.textContent();
        console.log("orderText is :" + orderText);
        expect(orderText.includes("Thank you for your order.")).toBeTruthy();

        let OrderIDText:any;
        OrderIDText = await this.Order.locator("b").first().textContent();
        console.log("Order ID text is :" + OrderIDText);

        //Split the text based on ":"
        const arr = OrderIDText.split(":");
        console.log(arr);

        // Then we get the first index of the array
        const OrderID = arr[0];
        console.log("Order ID is : " + OrderID);
        expect(OrderID).toBeTruthy();

    }

    async deleteAllOrders() {
        // Click on "Delete All Orders" button ------------------------

        // click OK to confirm delete  -------------------------------
        // To click on a dialog box with OK - accept
        this.page.on('dialog', async dialog => {
            console.log(dialog.message());
            await dialog.accept();
        });
        await this.deleteButton.click();
    }
}
