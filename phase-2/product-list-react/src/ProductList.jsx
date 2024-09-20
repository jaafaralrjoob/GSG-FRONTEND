function ProductList({ products, onFilter, activeFilter }) {
  const categories = ["All", "Electronics", "Clothing"];

  return (
    <div>
      <div className="filter-section">
        {categories.map((category) => (
          <button
            key={category}
            className={`filter-btn ${
              activeFilter === category ? "active" : ""
            }`}
            onClick={() => onFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="product-display">
        {products.map((product, index) => (
          <div key={index} className="product-item">
            <h2>{product.name}</h2>
            <p>Category: {product.category}</p>
            <p>Price: ${product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
