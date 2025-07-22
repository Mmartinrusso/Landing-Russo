import React, { useState } from 'react';
import './CartWidget.css';

const CartWidget = () => {
  const [cartCount, setCartCount] = useState(0);

  const handleCartClick = () => {
    // Simular agregar un producto al carrito
    setCartCount(prevCount => prevCount + 1);
  };

  return (
    <div className="cart-widget" onClick={handleCartClick}>
      <i className="fas fa-shopping-cart"></i>
      {cartCount > 0 && (
        <span className="cart-count">{cartCount}</span>
      )}
      <span className="cart-text">Carrito</span>
    </div>
  );
};

export default CartWidget; 