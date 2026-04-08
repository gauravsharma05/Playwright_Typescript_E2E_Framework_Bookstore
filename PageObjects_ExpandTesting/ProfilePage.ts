import {test,expect,Locator,Page} from "@playwright/test";

export class ProfilePage
{
    page:Page;
    profile:Locator;
    allBooksLink:Locator;

constructor(page: Page)
{
this.page = page;
this.profile =  page.locator(".mt-3");
this.allBooksLink =  page.getByText("All Books");
}

async verifyProfile()
{
    // Verify the Profile text on the Landing page
    const text = await this.profile.first().textContent();
    console.log("text is:" + text);
    expect(text).toBe("Profile");
}

async clickAllBooks()
{
    //click on "All Books" link to go to the bookstore
    await this.allBooksLink.click();
}

}
