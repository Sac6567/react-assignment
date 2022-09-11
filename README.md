# React Training Assignment: E-commerce shopping cart application

Problem Statement:

Create a simple e-commerce app where users can view products and add them to the shopping cart.



Requirements:

• Must include 3 main pages: Home, Category (dynamic), Checkout

• Home page must have a menu for all categories available. Each menu item is a link to appropriate
category page

• Category page must list all category products

• Checkout page must show all items in the shopping cart and allow user to manipulate them

• Category page must have at least one filter for displayed products (e.g. delivery checkbox)

• Must include essential shopping cart management: add/remove item to/from cart,
increase/decrease number of items in a cart

• Must persist cart state if page is refreshed (e.g. in local storage)

• React hooks for state management



Recommendations and suggestions:

• Scaffold the app with create-react-app

• Use provided .json files as a database (import data from “file.json”)

• Use Context API to manage global state

• Remember that you have multiple hooks for state in your disposal: useState and useReducer

• Keep products in state and operate with the state instead of imported version (i.e. don’t directly
operate on the data variable when you “import data from products.json”)

• For category pages, implement dynamic routes with React Router. Use category id as the parameter

• Don’t be scared of googling for a code snippet / solution



Resources:

• Two .json files as a harcoded database: categories.json, products.json



Useful links:

• Will push you if you deadly stuck with shopping cart:
https://codepen.io/ChillyPenguin7/pen/EMWBqJ

• The answer here can give you the idea how to do filtering:
https://stackoverflow.com/questions/57861003/how-to-filter-search-in-react

• Can help you if you stuck with shopping cart. Although the article is intended for typescript users, it
can give you the idea how to move on:
https://elisealcala.com/context-use-reducer-typescript/

