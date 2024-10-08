﻿# GSG-FRONTEND Challenge

 Phase 1: HTML, CSS & JavaScript Implementation
Objective: Create a functional and visually appealing web page that displays a filterable list of products.

Requirements:

HTML Structure:

Heading: A clear heading to identify the product list.

Filter Section: A designated area to hold the filter buttons (or dropdown).

Product Display Area: A container element to display the product items.

CSS Styling:

Layout: Employ CSS techniques (flexbox or grid) to create a well-organized layout for your webpage.

Typography: Choose suitable fonts and sizes that enhance readability.

Colors and Visual Appeal: Use a visually appealing color scheme. Use background colors or borders to distinguish elements.

Filter Buttons: Style the filter buttons to be visually distinctive and interactive (e.g., change appearance on hover).

JavaScript Functionality:

Product Data:

Define an array of product objects directly in your JavaScript code. Each object should represent a product and have these properties:

name (string): The name of the product.

category (string): The category the product belongs to (e.g., "Electronics", "Clothing").

price (number): The price of the product.

Dynamic Product Listing:
Write JavaScript code to dynamically create the HTML for each product and append it to the designated display area in your HTML. Display the product name, category, and price at a minimum.

Filtering by Category:

Implement filter buttons (or a dropdown menu) that correspond to the categories in your product data.

When a category is selected, update the product display to show only the products from that category.

Include an option (like "All") to display all products.

 

Phase 2: React Conversion (After Watching the Tutorial)
Objective: Convert your HTML, CSS, and JavaScript solution from Phase 1 into a React application, applying the concepts learned in the Mosh Hamedani React tutorial.

Requirements:

Component Structure:

App component (the primary component for your application).

ProductList component (dedicated to displaying and filtering the product list).

Create at least two React components:

State Management:

The array of products.

The currently active filter (e.g., "All", "Electronics").

The array of filtered products that should be displayed.

Within your React component(s), utilize state to manage:

Props & Event Handling:

Pass the required data (like the filtered product list) from the App component down to the ProductList component as props.

Pass event handler functions from the App component to the ProductList component to manage filter button clicks.

