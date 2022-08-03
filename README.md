# eShop with React and Firestore

### \_**[Launch the Live Site]()**\_

## Description

This project is designed to reinforce your React learnings and make sure that you are comfortable with most aspect of the framework.
With this project you will practice how to:

-   Fetch Data within a React App
-   Use react-router-dom
-   Use Firebase/Firestore

### MVP

At a minimum your e-shop website should have two pages:

-   Home Page
    -   This will contain:
        -   A Grid of products
        -   Carousel of featured products
        -   Product Page (with id parameter) Similar to a product page on another site, allows you to add to cart and select product variants
-   All products should be stored in Firestore:
    -   You should store the following information:
        -   quantity
        -   variants (could be colors, sizes, etc)
        -   price per unit
        -   name
        -   image url
        -   favourited or not (boolean)
            All data should be stored in Firestore and fetched by the frontend, there should be NO static product data in the react application

### Bonus

Using Firestore and react create, a cart system. Create a cart page in your react app Add logic to prevent users from adding items to cart that are no longer in stock. You will have to check the current cart and the product quantity Cart page should have the following:

-   List of products in cart

    -   Ability to change quantity of products in cart
    -   Ability to remove items from cart

-   TIPS :

1. Make sure your site is scoped to one category of products

## Implementation

<style>
  red {color: red}
  yellow {color: yellow}
  green {color: lightgreen}
</style>

### Breakdown (<red>containers</red>, <yellow>components</yellow>, <green>other</green>)

### <red>Home Page</red>

-   <yellow>Navigation</yellow>
-   <yellow>Search Bar</yellow>
-   <red>Product List</red>
    -   <yellow>Featured Product Cards</yellow>
    -   <yellow>Product Cards</yellow>

### <red>Expanded Product Page</red>

-   <green>(x) redirects back to Home Page</green>
-   <green>Add to cart button (redirects back to Home Page)</green>
-   <yellow>+/- button to increase decrease amount</yellow>

### <red>Cart</red>

-   <yellow>Navigation</yellow>
-   <yellow>Search Bar (redirects to Home Page)</yellow>
-   <yellow>+/- button to increase decrease amount</yellow>
-   <green>Remove from cart button</green>
