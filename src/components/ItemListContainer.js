import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  // Datos de productos de ejemplo
  const products = [
    {
      id: 1,
      name: "iPhone 15 Pro",
      price: 999,
      image: "https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=400&h=400&fit=crop",
      category: "Electrónicos"
    },
    {
      id: 2,
      name: "MacBook Air M2",
      price: 1199,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=400&h=400&fit=crop",
      category: "Computadoras"
    },
    {
      id: 3,
      name: "AirPods Pro",
      price: 249,
      image: "https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=400&fit=crop",
      category: "Audio"
    },
    {
      id: 4,
      name: "iPad Air",
      price: 599,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      category: "Tablets"
    },
    {
      id: 5,
      name: "Apple Watch Series 9",
      price: 399,
      image: "https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=400&h=400&fit=crop",
      category: "Smartwatches"
    },
    {
      id: 6,
      name: "Sony WH-1000XM5",
      price: 349,
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
      category: "Audio"
    },
    {
      id: 7,
      name: "Samsung Galaxy S24",
      price: 899,
      image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=400&h=400&fit=crop",
      category: "Electrónicos"
    },
    {
      id: 8,
      name: "Dell XPS 13",
      price: 1299,
      image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400&h=400&fit=crop",
      category: "Computadoras"
    },
    {
      id: 9,
      name: "Nintendo Switch OLED",
      price: 349,
      image: "https://images.unsplash.com/photo-1578303512597-81e6cc155b3e?w=400&h=400&fit=crop",
      category: "Gaming"
    },
    {
      id: 10,
      name: "DJI Mini 3 Pro",
      price: 759,
      image: "https://images.unsplash.com/photo-1579829366248-204fe8413f31?w=400&h=400&fit=crop",
      category: "Drones"
    },
    {
      id: 11,
      name: "GoPro Hero 11",
      price: 399,
      image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=400&h=400&fit=crop",
      category: "Cámaras"
    },
    {
      id: 12,
      name: "Samsung Galaxy Tab S9",
      price: 699,
      image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=400&h=400&fit=crop",
      category: "Tablets"
    }
  ];

  return (
    <div className="item-list-container">
      <div className="container">
        <h2 className="greeting">{greeting}</h2>
        
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <div className="product-image">
                <img src={product.image} alt={product.name} />
                <div className="product-overlay">
                  <button className="add-to-cart-btn">Agregar al Carrito</button>
                </div>
              </div>
              <div className="product-info">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-category">{product.category}</p>
                <p className="product-price">${product.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer; 