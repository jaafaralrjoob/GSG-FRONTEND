// dummy products data
const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "T-Shirt", category: "Clothing", price: 20 },
  { name: "Jacket", category: "Clothing", price: 100 },
];

const productDisplay = document.querySelector(".product-display");
const filterButtons = document.querySelectorAll(".filter-btn");

// Function to display products on the page
function displayProducts(filteredProducts) {
  productDisplay.innerHTML = ""; // clear the existing products
  filteredProducts.forEach((product) => {
    const productItem = document.createElement("div");
    productItem.classList.add("product-item");
    productItem.innerHTML = `
            <h2>${product.name}</h2>
            <p>Category: ${product.category}</p>
            <p>Price: $${product.price}</p>
        `;
    productDisplay.appendChild(productItem);
  });
}

// Function to filter products based on category
function filterProducts(category) {
  if (category === "All") {
    displayProducts(products);
  } else {
    const filteredProducts = products.filter(
      (product) => product.category === category
    );
    displayProducts(filteredProducts);
  }
}

// click event listener for filter buttons
filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((button) => {
      button.classList.remove("active");
    });
    button.classList.add("active");
    const category = button.getAttribute("data-category");
    filterProducts(category);
  });
});

displayProducts(products);
