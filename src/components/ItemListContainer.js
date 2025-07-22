import React from 'react';
import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <div className="container">
        <h2 className="greeting">{greeting}</h2>
        <div className="content-placeholder">
          <p>Aquí se mostrará el catálogo de productos próximamente...</p>
          <div className="placeholder-grid">
            <div className="placeholder-item"></div>
            <div className="placeholder-item"></div>
            <div className="placeholder-item"></div>
            <div className="placeholder-item"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer; 