import { useState } from "react";
import ProductList from "./ProductList";

const products = [
  { name: "Smartphone", category: "Electronics", price: 699 },
  { name: "Laptop", category: "Electronics", price: 1200 },
  { name: "T-Shirt", category: "Clothing", price: 20 },
  { name: "Jacket", category: "Clothing", price: 100 },
];

function App() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filterProducts = (category) => {
    setActiveFilter(category);
  };

  const filteredProducts =
    activeFilter === "All"
      ? products
      : products.filter((product) => product.category === activeFilter);

  return (
    <div>
      <h1>Our Products</h1>
      <ProductList
        products={filteredProducts}
        onFilter={filterProducts}
        activeFilter={activeFilter}
      />
    </div>
  );
}

export default App;
