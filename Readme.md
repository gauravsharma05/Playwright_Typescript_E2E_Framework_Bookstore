# Playwright TypeScript E2E Automation Framework – Bookstore

This repository contains an end-to-end (E2E) test automation framework built using **Playwright** and **TypeScript** for an eCommerce Bookstore application (ExpandTesting).

The framework follows best practices such as the **Page Object Model (POM)**, **data-driven testing**, and **CI integration with GitHub Actions**.

---

##  Features

- End-to-End test coverage of bookstore workflow
- Page Object Model (POM) design pattern
- Data-driven testing using JSON
- Modular and scalable structure
- Integrated with GitHub Actions for CI/CD
- Automated order cleanup after test execution

```

## Project Structure

├── Page Object classes
│ ├── LoginPage.ts
│ ├── ProfilePage.ts
│ ├── BookStorePage.ts
│ ├── ShoppingCartPage.ts
│ ├── CheckoutPage.ts
│ ├── OrdersPage.ts
│
├── tests
│ └── ExpandTesting.spec.ts
│
├── utils
│ └── ExpandTesting_TestData.json
│
├── playwright.config.ts
├── package.json
└── .github/workflows/ # GitHub Actions CI config
```

##  Test Workflow

The automated test simulates a real user journey:

1.  Login to the application  
2.  Navigate to Profile Page  
3.  Click on **"All Books"**  
4.  Select a book (from test data) and add to cart  
5.  Verify the correct book is added to the cart  
6.  Proceed to Checkout and enter payment details  
7.  Complete purchase  
8.  Verify order details on Orders page  
9.  Delete all orders (cleanup)

---

##  Test Data

- Test data is stored in a JSON file:

## Running Tests

- npx playwright test ExpandTesting.spec.ts