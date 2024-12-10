# Vending Machine React App
A vending machine application built with React, where users can purchase product (Coke, Pepsi, Dew) using coins and cash. The app features a responsive UI with product images, stock management, and the ability to process refunds.

## Features
* product Grid: Display Coke, Pepsi, and Dew with images, prices, and stock levels.
* Payment Methods: Choose between cash or coins for purchasing product.
* Stock and Balance Display: Shows available product stock and vending machine cash/coin balance.
* Refunds: Option to refund purchased items, adjusting stock and balance.
* Responsive Design: The app is fully responsive and adapts to different screen sizes.
* Styling: Tailwind CSS used for styling.

## Functions
* App.js
    -The main file where the application logic is executed.
    -It fetches and updates vending machine data.
    -Handles state management (coins, cash, product stock).
* DrinksMenu.js
    -Displays the product list in a responsive grid layout.
    -Shows the price, stock, and product image for each item.
    -Handles product selection.
    -Handles payments made via cash or coins.
    -Handles form validation.
    -Updates product stock and vending machine balance.
* Refund.js
    -Handles the refund process for returned product.
    -Adjusts stock and balance accordingly.

## Prerequisites
* Before you begin, ensure you have met the following requirements:
* Node.js: Download Node.js

## Getting Started
* Clone the Repository
    git clone https://github.com/jnisz/vending-machine-app.git
* Install Dependencies
    cd vending-machine-react-app
    npm install
* Run the Application
    npm start
This will open the app in your default web browser at http://localhost:3000.